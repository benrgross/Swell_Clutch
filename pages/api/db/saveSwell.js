import axios from "axios";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { spot } = req.body;
  const { _id } = spot;
  const { swells } = req.body;
  console.log(req.body.user);
  console.log(swells);
  const spotId = parseFloat(_id);
  if (req.method === "POST") {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: req.body.user.email,
        },
      });
      console.log(user);
      const location = await prisma.location.upsert({
        where: {
          name: spot.name,
        },
        create: {
          spot_id: spotId,
          name: spot.name,
          lat: spot.lat,
          lon: spot.lon,
          timezone: spot.timezone,
          thumbnail: spot.thumbnail,
          type: spot.location.type,
          subregionId: spot.subregionId,
          user: {
            connect: {
              email: req.body.user.email,
            },
          },
          session: {
            create: {
              timeStamp: spot.tide.current.timestamp,
              timeZone: spot.timezone,
              utcOffset: spot.tide.current.utcOffset,
              surfMax: spot.waveHeight.max,
              surfMin: spot.waveHeight.min,
              waterTemp: `${spot.waterTemp.min} - ${spot.waterTemp.max}`,
              conditions: {
                human: spot.conditions.human,
                value: spot.conditions.value,
                sortableCondition: spot.conditions.sortableCondition,
              },
              tide: {
                type: spot.tide.current.type,
                height: spot.tide.current.height,
                timestamp: spot.tide.timestamp,
                nextType: spot.tide.next.type,
                nextTime: spot.tide.next.timestamp,
                nextHeight: spot.tide.next.height,
              },
              wind: {
                speed: spot.wind.speed,
                direction: spot.wind.direction,
                directionType: spot.wind.directionType,
              },
              locationId: spotId,
              userEmail: req.body.user.email,
            },
          },
        },
        update: {
          spot_id: spotId,
          name: spot.name,
          lat: spot.lat,
          lon: spot.lon,
          timezone: spot.timezone,
          thumbnail: spot.thumbnail,
          type: spot.location.type,
          subregionId: spot.subregionId,
          user: {
            connect: {
              email: req.body.user.email,
            },
          },
          session: {
            create: {
              timeStamp: spot.tide.current.timestamp,
              timeZone: spot.timezone,
              utcOffset: spot.tide.current.utcOffset,
              surfMax: spot.waveHeight.max,
              surfMin: spot.waveHeight.min,
              waterTemp: `${spot.waterTemp.min} - ${spot.waterTemp.max}`,
              conditions: {
                human: spot.conditions.human,
                value: spot.conditions.value,
                sortableCondition: spot.conditions.sortableCondition,
              },
              tide: {
                type: spot.tide.current.type,
                height: spot.tide.current.height,
                timestamp: spot.tide.timestamp,
                nextType: spot.tide.next.type,
                nextTime: spot.tide.next.timestamp,
                nextHeight: spot.tide.next.height,
              },
              wind: {
                speed: spot.wind.speed,
                direction: spot.wind.direction,
                directionType: spot.wind.directionType,
              },
              locationId: spotId,
              userEmail: req.body.user.email,
            },
          },
        },
        include: {
          session: true,
          user: true,
        },
      });

      res.status(200).send(location);
    } catch (err) {
      console.log(err);
    }
  }
}

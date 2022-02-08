import axios from "axios";
import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  const { spot } = req.body;
  if (req.method === "POST") {
    try {
      const session = await prisma.session.create({
        data: {
          timeStamp: spot.tide.current.timestamp,
          utcOffset: spot.tide.current.utcOffset,
          timeZone: spot.timezone,
          surfMin: spot.waveHeight.min,
          surfMax: spot.waveHeight.max,
          waterTemp: `${spot.waterTemp.min} -  ${spot.waterTemp.max}`,
          location: {
            connectOrCreate: {
              where: {
                id: spot._id,
              },
              create: {
                id: spot._id,
                name: spot.name,
                lat: spot.lat,
                spot: spot.lan,
                timezone: spot.timezone,
                thumbnail: spot.thumbnail,
                type: spot.location.type,
                subreagionId: spot.subreagionId,
              },
            },
          },
          include: {
            location: true,
          },
        },
      });
      console.log(session);
      res.status(200).send(session);
    } catch (err) {
      console.log(err);
    }
  }
}

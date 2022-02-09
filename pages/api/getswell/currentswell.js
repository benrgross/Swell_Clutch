import axios from "axios";

export default async function handler(req, res) {
  console.log(req.body);
  if (req.method === "POST") {
    try {
      const { data } = await axios.get(
        `https://services.surfline.com/kbyg/spots/forecasts/wave?spotId=${req.body.spotId}`
      );
      const { lat, lon } = data.associated.location;

      const results = await axios.get(
        `https://services.surfline.com/kbyg/mapview/spot?lat=${lat}&lon=${lon}`
      );
      console.log(results.data);
      res.status(200).json(results.data);
    } catch (error) {
      res.status(400).send(error);
    }
  }
}

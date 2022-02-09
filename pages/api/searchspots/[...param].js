import axios from "axios";
const cheerio = require("cheerio");

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      console.log(req.body);

      const results = [];
      const { data } = await axios.get(
        `https://www.surfline.com/search/${req.query.param}`
      );

      const $ = cheerio.load(data);

      $("#surf-spots > div > div").each((i, element) => {
        let href = $(element).children("a").attr("href");
        let spotId = href.split("/")[5];
        let nameFromRef = href.split("/");
        let name = nameFromRef[4].split("-").join(" ");

        const spot = {
          name: name,
          spotId: spotId,
          href: href,
        };
        results.push(spot);
      });
      console.log(results);
      res.status(200).json(results);
    } catch (error) {
      res.status(400).send({ error: "this is a cheerio error" });
      console.log(error);
    }
  } else {
    res.status(400).send({ error: "server did not receive corrent method" });
  }
}

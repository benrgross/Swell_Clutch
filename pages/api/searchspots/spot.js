import axios from "axios";
const cheerio = require("cheerio");

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const results = [];
      const { data } = await axios.get(
        `https://www.surfline.com/search/${req.body.spot}`
      );

      const $ = await cheerio.load(data);

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
      if (results.length > 1) {
        res.status(200).json(results);
      } else res.send({ error: "cheerio not loading" });
    } catch (error) {
      res.json({ error: "server error" });
      // res.status(400).send({ error: "this is a cheerio error" });
      // console.log(error);
    }
  } else {
    res.status(400).send({ error: "server did not receive corrent method" });
  }
}

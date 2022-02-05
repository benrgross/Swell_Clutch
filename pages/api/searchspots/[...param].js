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
        let name = $(element).find(".result__name").text();

        const spot = {
          name: name,
          spotId: spotId,
          href: href,
        };
        results.push(spot);
      });
      console.log(results);
      res.send(results);
    } catch (error) {
      console.log(error);
    }
  }
}

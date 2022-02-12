import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
  console.log(req.param);

  if (req.method === "GET") {
    try {
      const results = [];

      // const { data } = await axios.get(
      //   `https://www.surfline.com/search/${req.query.params}`,
      //   {
      //     transformRequest: [
      //       (data, headers) => {
      //         delete headers.common;
      //         return data;
      //       },
      //     ],
      //   }
      // );

      const browser = await puppeteer.launch({
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
        headless: true,
      });
      const page = await browser.newPage();
      await page.goto(`https://www.surfline.com/search/${req.params.spot}`);

      const html = await page.content(); // serialized HTML of page DOM.

      const $ = await cheerio.load(html);

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

      res.status(200).json(results);
    } catch (error) {
      res.json({ error: "server error" });
      console.log(error);
    }
  }
}

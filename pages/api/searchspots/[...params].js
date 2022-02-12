import axios from "axios";
import cheerio from "cheerio";
const chrome = require("chrome-aws-lambda");

export default async function handler(req, res) {
  console.log(req.param);
  console.log(req.method);

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

      const browser = await puppeteer.launch(
        process.env.NODE_ENV === "production"
          ? {
              args: chrome.args,
              executablePath: await chrome.executablePath,
              headless: chrome.headless,
            }
          : { headless: true }
      );

      const page = await browser.newPage();
      await page.goto(`https://www.surfline.com/search/${req.params.spot}`);

      const html = await page.content(); // serialized HTML of page DOM.
      res.json(html);

      // const $ = await cheerio.load(html);

      // $("#surf-spots > div > div").each((i, element) => {
      //   let href = $(element).children("a").attr("href");
      //   let spotId = href.split("/")[5];
      //   let nameFromRef = href.split("/");
      //   let name = nameFromRef[4].split("-").join(" ");

      //   const spot = {
      //     name: name,
      //     spotId: spotId,
      //     href: href,
      //   };
      //   results.push(spot);
      // });

      // res.status(200).json(results);
    } catch (error) {
      res.json({ error: "server error" });
      console.log(error);
    }
  }
}

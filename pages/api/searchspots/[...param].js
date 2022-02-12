import axios from "axios";
import cheerio from "cheerio";
import puppeteer from "puppeteer";

export default async function handler(req, res) {
  console.log(req.query.param[0]);
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

      const browser = await puppeteer.launch({
        args: [
          "--no-sandbox",
          "--disable-setuid-sandbox",
          '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
        ],
        // waitUntil: "domcontentloaded",
      });
      const page = await browser.newPage();
      await page.setUserAgent(
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
      );
      await page.goto(`https://www.surfline.com/search/${req.query.param[0]}`);

      const html = await page.content(); // serialized HTML of page DOM.
      // const text = await page.evaluate(() => {
      //   // const name = Array.from(
      //   //   document
      //   //     .querySelector("#surf-spots")
      //   //     .querySelectorAll(".SearchResults_result__5syZp"),
      //   //   (element) => element.textContent
      //   // );

      //   return document.querySelector(".Search_headline__rMElG").innerText;
      // });

      const $ = cheerio.load(html);

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
        console.log(spot);
        results.push(spot);
      });

      await browser.close();

      res.status(200).json(results);
    } catch (error) {
      res.json(error);
      console.log(error);
    }
  }
}

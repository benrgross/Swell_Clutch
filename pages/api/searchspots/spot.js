import awsChromium from "chrome-aws-lambda";
import { chromium } from "playwright-core";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const browser = await chromium.launch({
        args: [...awsChromium.args, "--font-render-hinting=none"], // This way fix rendering issues with specific fonts
        executablePath:
          process.env.NODE_ENV === "production"
            ? await awsChromium.executablePath
            : "/usr/local/bin/chromium",
        headless:
          process.env.NODE_ENV === "production" ? awsChromium.headless : true,
        waitUntil: "domcontentloaded",
      });

      // const context = await browser.newContext();
      const page = await browser.newPage();

      const url = `https://www.surfline.com/search/${req.body.spot}`;

      await page.goto(url);

      // const html = await page.content();

      const text = await page.evaluate(() => {
        const spots = Array.from(
          document
            .querySelector("#surf-spots")
            .querySelectorAll(".SearchResults_result__5syZp"),
          (element) => {
            let href = element
              .querySelector(".SearchResults_resultLink__xhEnG")
              .getAttribute("href");

            let name = element.querySelector(
              ".SearchResults_resultName__zRhYX"
            ).textContent;

            let spotId = href.split("/")[5];

            const spot = {
              name: name,
              href: href,
              spotId: spotId,
            };

            return spot;
          }
        );
        return spots;
      });

      await browser.close();

      res.status(200).json(text);
    } catch (error) {
      res.json(error);
    }
  }
}

/// old cheerio load call -- NOT WOKRING ON VERCEL
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

// const page = await browser.newPage();
// await page.setUserAgent(
//   "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
// );

// const text = await page.evaluate(() => {
//   // const name = Array.from(
//   //   document
//   //     .querySelector("#surf-spots")
//   //     .querySelectorAll(".SearchResults_result__5syZp"),
//   //   (element) => element.textContent
//   // );

//   return document.querySelector(".Search_headline__rMElG").innerText;
// });

// const browser = await puppeteer.launch({
//   args: [
//     "--no-sandbox",
//     "--disable-setuid-sandbox",
//     '--user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3312.0 Safari/537.36"',
//   ],
//   // waitUntil: "domcontentloaded",
// });

// const $ = await cheerio.load(html);

//       await $("#surf-spots > div > div").each((i, element) => {
//         console.log("hello");
//         let href = $(element).children("a").attr("href");
//         let spotId = href.split("/")[5];
//         let nameFromRef = href.split("/");
//         let name = nameFromRef[4].split("-").join(" ");

//         const spot = {
//           name: name,
//           spotId: spotId,
//           href: href,
//         };
//         console.log(spot);
//         results.push(spot);
//       });

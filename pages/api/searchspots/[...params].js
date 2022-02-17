import cheerio from "cheerio";
import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    console.log(req.query);
    try {
      const { data } = await axios.get(
        `https://www.surfline.com/search/${req.query.params[0]}`,
        {
          headers: {
            "User-Agent":
              "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
            "Cache-Control": "no-cache, no-store, max-age=0, must-revalidate",
          },
        }
      );

      const $ = await cheerio.load(data);

      let results = [];
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

      res.send(results);
    } catch (err) {
      res.send(err);
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

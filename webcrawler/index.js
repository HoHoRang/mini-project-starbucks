import puppeteer from "puppeteer";
import mongoose from "mongoose";
import { Starbucks } from "./models/starbucks.model.js";

//mongoDB 접속
mongoose.connect("mongodb://localhost:27017/codecamp");

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto("https://www.starbucks.co.kr/menu/drink_list.do");
  await page.waitForTimeout(1000);
  // const framePage = await page
  //   .frames()
  //   .find((el) => el.url().includes("/item/sise_day.naver?code=005930"));
  // iframe이 없으므로 생략

  for (let i = 1; i <= 10; i++) {
    await page.waitForTimeout(500);

    const img = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dt > a > img`,
      (el) => el.getAttribute("src")
    );

    const name = await page.$eval(
      `#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(${i}) > dl > dd`,
      (el) => el.textContent
    );

    console.log(`이미지: ${img}, 이름: ${name}`);

    const starbucks = new Starbucks({
      name: name,
      img: img,
    });

    await starbucks.save();
  }

  await browser.close();
}

startCrawling();

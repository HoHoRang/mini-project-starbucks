import cheerio from "cheerio";
import axios from "axios";

// 오늘 날짜 조회
export function getToday() {
  const aaa = new Date();
  const yyyy = aaa.getFullYear();
  const mm = String(aaa.getMonth() + 1).padStart(2, "0");
  const dd = String(aaa.getDate()).padStart(2, "0");
  const createdAt = `${yyyy}-${mm}-${dd}`; //year + "-" + month + "-" + date;
  return createdAt;
}

// 주민번호 뒷자리 mask처리
export function maskPersonal(personal) {
  return personal.split("").fill("*", 7).join("");
}

//cheerio를 활용한 scraping
export async function getOpenGraph(myData) {
  const targetURL = myData;

  const resultObject = {};

  const aaa = await axios.get(targetURL);
  const $ = cheerio.load(aaa.data);
  $("meta").each((_, el) => {
    if ($(el).attr("property")) {
      const key = $(el).attr("property").split(":")[1];
      const value = $(el).attr("content");
      resultObject[key] = value;
    }
  });

  const result = { ...resultObject };

  return result;
}

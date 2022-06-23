import { getToday } from "./utils.js";
import axios from "axios";

// 1. 이메일이 정상인지 확인(1-존재여부, 2-'@'포함여부)
export function checkValidationEmail(mail) {
  if (mail === undefined || !mail.includes("@")) {
    console.log("이메일 형식이 올바르지 않습니다!");
    return false;
  } else {
    return true;
  }
}

// 2. 가입환영 템플릿 만들기
export function getWelcomeTemplate(name, phone, preferSite) {
  return `
      <html>
        <body>
          <h1>${name}님 가입을 환영합니다.</h1>
          <hr>
          <div>이름: ${name}</div>
          <div>전화번호: ${phone}</div>
          <div>좋아하는 사이트: ${preferSite}</div>
          <div>가입일: ${getToday()}</div>
        </body>
      </html>
    `;
}

// 3. 이메일에 가입환영 템플릿 전송하기
export async function sendTemplateToEmail(email, mailContent) {
  const appKey = process.env.MAIL_APP_KEY;
  const XSecretKey = process.env.MAIL_X_SECRET_KEY;
  const sender = process.env.MAIL_SENDER;

  const result = await axios.post(
    `https://api-mail.cloud.toast.com/email/v2.0/appKeys/${appKey}/sender/mail`,
    {
      senderAddress: sender,
      title: "가입을 환영합니다!!!",
      body: mailContent,
      receiverList: [{ receiveMailAddr: email, receiveType: "MRT0" }],
    },
    {
      headers: {
        "X-Secret-Key": XSecretKey,
        "Content-Type": "application/json;charset=UTF-8",
      },
    }
  );

  console.log("메일 전송 끝!!!");
}

# Mini-Project : Starbucks

#### by 김지웅

<br>

> Starbucks의 메뉴와 이미지 크롤링 및 회원가입 시스템

<br>

## 1. 프로젝트 설명

스타벅스 회원가입, 로그인 기능 및 메뉴 스크롤링

<br>

## 2. 배포 주소

```
http://locahost:3000
```

<br>

## 3. 기술 스택

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=JavaScript&logoColor=black"/>
<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=black"/>
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=flat&logo=Nodemon&logoColor=black"/>
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=MongoDB&logoColor=black"/>

<img src="https://img.shields.io/badge/Puppeteer-40B5A4?style=flat&logo=Puppeteer&logoColor=black"/>
<img src="https://img.shields.io/badge/Cheerio-40B5A4?style=flat&logo=Puppeteer&logoColor=black"/>
<img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=Docker&logoColor=black"/>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>

<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=Swagger&logoColor=black"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=CSS3&logoColor=white"/>

<br>

## 4. ERD 설계

```
// Starbucks
const starbucksSchema = new mongoose.Schema({
  name: String,
  img: String,
});

// Token
const tokenSchema = new mongoose.Schema({
  token: String,
  phone: String,
  isAuth: Boolean,
});

// OG
const ogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

// User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  personal: String,
  prefer: String,
  pwd: String,
  phone: String,
  og: ogSchema,
});
```

<br>

## 5. 프로젝트 설치 방법

`./backend/`에서

```
yarn install # 모듈 설치

docker-compose build # 백엔드 서버 및 MongoDB 빌드

docker-compose up # 백엔드 및 MongoDB 실행
```

`./webcrawler`에서

```
yarn install # 모듈 설치

node index.js # 크롤링 실행
```

<br>

## 6. 폴더 구조

```
.
├── README.md
├── backend
│   ├── Dockerfile
│   ├── docker-compose.yaml
│   ├── email.js
│   ├── index.js
│   ├── models
│   │   ├── starbucks.model.js
│   │   ├── token.model.js
│   │   └── user.model.js
│   ├── package.json
│   ├── phone.js
│   ├── swagger
│   │   ├── config.js
│   │   ├── starbucks.swagger.js
│   │   ├── token.swagger.js
│   │   └── users.swagger.js
│   ├── utils.js
│   └── yarn.lock
├── diagram.drawio
├── frontend
│   ├── img
│   │   ├── back-ground.jpg
│   │   ├── facebook.png
│   │   ├── google.png
│   │   ├── kakao.png
│   │   ├── menu-back-ground.jpg
│   │   ├── naver.png
│   │   ├── starbucks.png
│   │   └── user-back-ground.jpg
│   ├── login
│   │   ├── index.css
│   │   ├── index.html
│   │   ├── index.js
│   │   └── signup.js
│   ├── menu
│   │   ├── index.css
│   │   ├── index.html
│   │   ├── index.js
│   │   └── menu.js
│   └── user
│       ├── index.css
│       ├── index.html
│       ├── index.js
│       └── user.js
└── webcrawler
    ├── index.js
    ├── models
    │   └── starbucks.model.js
    ├── package.json
    └── yarn.lock
```

<br>

## 7. .env

```
SMS_APP_KEY=
SMS_X_SECRET_KEY=
SMS_SENDER=

MAIL_APP_KEY=
MAIL_X_SECRET_KEY=
MAIL_SENDER=
```

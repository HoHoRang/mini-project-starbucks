// 휴대폰 인증 토큰 전송하기
const getValidationNumber = async () => {
  document.querySelector("#ValidationInputWrapper").style.display = "flex";

  const phone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;

  axios
    .post("http://localhost:3001/tokens/phone", {
      phone,
    })
    .then((res) => {
      console.log(res.data);
    });
};

// 핸드폰 인증 완료 API 요청
const submitToken = async () => {
  const phone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;
  const token = document.querySelector("#TokenInput").value;

  axios
    .patch("http://localhost:3001/tokens/phone", {
      phone,
      token,
    })
    .then((res) => {
      console.log(res.data);
    });
};

// 회원 가입 API 요청
const submitSignup = async () => {
  const name = document.querySelector("#SignupName").value;
  const personal =
    document.querySelector("#SignupPersonal1").value +
    "-" +
    document.querySelector("#SignupPersonal2").value;
  const phone =
    document.querySelector("#PhoneNumber01").value +
    document.querySelector("#PhoneNumber02").value +
    document.querySelector("#PhoneNumber03").value;
  const prefer = document.querySelector("#SignupPrefer").value;
  const pwd = document.querySelector("#SignupPwd").value;
  const email = document.querySelector("#SignupEmail").value;

  axios
    .post("http://localhost:3001/user", {
      name,
      email,
      personal,
      prefer,
      pwd,
      phone,
    })
    .then((res) => {
      console.log(res.data);
    });

  console.log("회원 가입 완료");
};

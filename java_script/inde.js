let imgobject = {
  1: `<div class="mobile2"><img  loading="lazy"  src="new img/img1.webp" alt="mobile2" ></div>`,
  2: '<div class="mobile2"><img  loading="lazy"  src="new img/images1.webp" alt="mobile2" ;"></div>',
  3: '<div class="mobile2"><img  loading="lazy"  src="new img/img2.webp" alt="mobile2" ;"></div>',
  4: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage1.webp" alt="mobile2" ;"></div>',
  5: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage2.webp" alt="mobile2" ;"></div>',
  6: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage3.webp" alt="mobile2" ;"></div>',
  7: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage4.webp" alt="mobile2" ;"></div>',
  8: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage5.webp" alt="mobile2" ;"></div>',
  9: '<div class="mobile2"><img  loading="lazy"  src="new img/myimage6.webp" alt="mobile2" ;"></div>',
  10: '<div class="mobile2"><img loading="lazy" src="new img/myimage7.webp" alt="mobile2" ;"></div>',
  11: '<div class="mobile2"><img loading="lazy" src="new img/myimage8.webp" alt="mobile2" ;"></div>',
  12: '<div class="mobile2"><img loading="lazy" src="new img/myimage9.webp" alt="mobile2" ;"></div>',
  13: '<div class="mobile2"><img loading="lazy" src="new img/myimage10.webp" alt="mobile2" ;"></div>',
  14: '<div class="mobile2"><img loading="lazy" src="new img/myimage11.webp" alt="mobile2" ;"></div>',
};

function changeimg() {
  let imgmobile = document.querySelector(".imgmobile");
  let imgplus = 0;
  let imgplus2 = 0;
  setInterval(() => {
    if (imgplus === 14) {
      imgplus = 1;
      imgplus2 = imgplus;
    } else {
      imgplus++;
    }
    imgmobile.innerHTML = `${imgobject[imgplus]}` || ""; // agar hame value null mili to khali string rakho
  }, 300000);
}
setInterval(() => {
  let imgmobile = document.querySelector(".imgmobile img");
  imgmobile.className = "trans";

  let img = document.querySelector(".trans");
  img.style.animation = " roto 10.5s ease-in infinite";
}, 2800000);
changeimg();
function login() {
  function visibalLoginForm() {
    let creatdiv = document.createElement("div");
    creatdiv.setAttribute("class", "loginOpacity");
    let loginbutton = document.querySelector(".started");
    let hero = document.querySelector(".main");
    let loginForm = document.querySelector(".loginForm");
    if (!loginForm && !loginbutton) {
      return console.error(
        "Error: '.started' button or '.loginForm' not found!"
      );
    }
    loginbutton.addEventListener("click", () => {
      hero.appendChild(creatdiv);
      loginForm.style.visibility = "visible";
    });
  }
  visibalLoginForm();

  let savepassword = {};
  function loginForm() {
    let inputvalueGmail = document.querySelector(".form input");
    let inputvaluepassword = document.querySelector(
      ".form input[type='password']"
    );
    let form = document.querySelector(".form button");
    let errorValue = 1,
      classname = "",
      sms = "";
    if (inputvalueGmail === null && inputvaluepassword === null) {
      // yah block yah chake kar rah hai ki queryselector ne null to return nahi kiya hai
      return console.error(
        "Error: '.started' button or '.loginForm' not found!"
      );
    }
    form.addEventListener("click", (event) => {
      let gmail = "";
      gmail = inputvalueGmail.value;
      gmail = gmail.trim();
      let password = "";
      password = inputvaluepassword.value.trim();
      function gmailvalid() {
        if (gmail == "") {
          errorValue = 0;
          classname = ".gmail";
          sms = "plz enter a valid gmail";
        } else if (
          gmail.endsWith("@gmail.com") &&
          !gmail.includes(" ") &&
          !gmail.includes("..") &&
          !gmail.startsWith("_") &&
          gmail.length >= 5 &&
          gmail.length <= 30
        ) {
          savepassword[`${gmail}`] = password;
          errorValue = 1;
        } else {
          errorValue = 0;
          classname = ".gmail";
          sms = "plz enter a valid gmail";
        }
      }
      gmailvalid();

      function passwordvalid(password) {
        let valid1 = false;
        let valid2 = false;
        if (password.length < 8) {
          errorValue = 0;
          classname = ".password";
          sms = "your password is to short";
        }
        let spesalchar = "/!@#$%^&*()_+{}][;:'`,|-";
        let spesalnum = "123456789";
        for (const key of password) {
          if (spesalchar.includes(key)) {
            console.log(key);
            valid1 = true;
          }
          if (spesalnum.includes(key)) {
            console.log(key);
            valid2 = true;
          }
        }
        if (!valid1) {
          console.log("Add at least one special character");
          console.log("num");
          classname = ".password";
          sms = "add a char";
          return (errorValue = 0);
        }

        if (!valid2) {
          console.log("Add at least one number");
          console.log("num");
          classname = ".password";
          sms = "add a number";
          return (errorValue = 0);
        }
        if (!valid1 && !valid2) {
          console.log("Add at least one number");
          console.log("num");
          classname = ".password";
          sms = "Add at least one number or chereter";
          return (errorValue = 0);
        }
      }
      errorValue = passwordvalid(password);
      function chakeError(errornum, className, sms) {
        if (errornum === 0) {
          console.log(className);

          let classes = document.querySelector(`${className}`);
          classes.value = sms;
          classes.style.fontWeight = "400";
          errorValue = 1;
          inputvaluepassword.setAttribute("type", "tex");
          classes.addEventListener("click", () => {
            classes.value = "";
            errorValue = 1;
            inputvaluepassword.setAttribute("type", "tex");
          });
          if (errorValue === 1) {
            event.preventDefault();
          }
        }
      }
      chakeError(errorValue, classname, sms);
    });
  }
  loginForm();

  (function hidePassword() {
    let hidePassword = document.querySelector(".material-icons");
    let password = document.querySelector(".password");
    let chake = 0;
    if (!hidePassword && !password) {
      console.error("error: sonthing went rong");
    }
    hidePassword.addEventListener("click", () => {
      if (chake === 0) {
        password.setAttribute("type", "text");
        hidePassword.textContent = "visibility_off";
        chake = 1;
      } else {
        password.setAttribute("type", "password");
        hidePassword.textContent = "visibility";
        chake = 0;
      }
    });
  })();
}
login();
let index = 0;
let index2 = 0;
let str = [
  `created  by  dheeraj `,
  `Learn wev dev & dsa`,
  " web devalapar",
  "Becam  a  you tuber",
];
let typeWriterElement = document.querySelector(".typewriter");

function typeWriter() {
  if (index < str.length) {
    if (index2 < str[index].length) {
      typeWriterElement.textContent += str[index].charAt(index2);
      index2++;
      typeWriterElement.style.borderRight = "solid rgb(255, 255, 0) 3px";
      typeWriterElement.style.fontFamily = `"poppins", serif`;
    } else {
      typeWriterElement.textContent = "";
      index2 = 0;
      index++;
      let r1, r2, r3;
      r1 = Math.floor(Math.random() * 254) + 1;
      r2 = Math.floor(Math.random() * 254) + 1;
      r3 = Math.floor(Math.random() * 254) + 1;
      typeWriterElement.style.color = `rgb(${r1},${r2},${r3})`;
      typeWriterElement.style.fontFamily = `"poppins", serif`;
      typeWriterElement.style.borderRight = "solid rgb(255, 255, 0) 3px";
    }
  } else {
    index2 = 0;
    index = 0;
    typeWriterElement.style.borderRight = "none";
  }
}
setInterval(typeWriter, 300);

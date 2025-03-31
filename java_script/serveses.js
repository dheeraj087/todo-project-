function allobj(name, sdate, edate) {
  this.name = name;
  this.sdate = sdate;
  this.edate = edate;
}
let name = document.querySelector(".taskName");
let but = document.querySelector(".addTodo");
let eidtbut = document.querySelector(".eidtbut");
let deletetodolist = document.querySelector("#delete");
let body = document.querySelector(".forJSre");
let icon = document.querySelector(".icon");
let iconbut = document.querySelector(".iconbut");
let addTask = document.querySelector(".addTask");
let recBoxStr = document.querySelector(".recentbox strong");
let cancle = document.querySelector(".cancle");
icon.addEventListener("click", (e) => {});
cancle.addEventListener("click", () => (addTask.style.display = "none"));
i = 0;
let alltodo = [];

function addTodo() {
  but.addEventListener("click", function (e) {
    recBoxStr.style.display = "none";
    let obj = new allobj(name.value);
    alltodo.push(obj);

    let card = document.createElement("div");
    card.setAttribute("class", "add");
    let nj = alltodo[i];

    card.innerHTML = `<div class="addinput"> <input type="checkbox"/> ${alltodo[i].name}</div>
    `;
    body.appendChild(card);

    i++;
    addTask.style.display = "none";
    name.value = "";
  });
}

addTodo();

let deleteTask;
function deletetodo() {
  let addinput = 3;

  body.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("add")) {
      // deleteTask = e.target.closest(".add");
      deleteTask = e.target;
      deleteTask.style.backgroundColor = "#dbafa7";
    }
  });
}
let targe = null;

deletetodo();

function edit() {
  let edittask = null;
  function h2() {
  function hendlar() {
    console.log(name.value);
    name.value;
    console.log(name.name);
    edittask.innerHTML = `<div class="addinput"> <input type="checkbox"/> ${name.value.trim()}</div>
    `;
    edittask.style.color = "black";
    addTask.style.display = "none";
    but.style.display = "block";
    removeEventListener("click",hendlar)
  }
  console.log("select your task you want to eidt ");
  body.addEventListener("click", function (e) {
    if (e.target.className === "add") {
      deleteTask = null;
      edittask = e.target;
        console.log("task is selected =", edittask);
        if (edittask !== null) {
          edittask.style.color = "blue";
          addTask.style.display = "block";
          but.style.display = "none";
          eidtbut.style.display = "block";
          eidtbut.addEventListener("click", hendlar
            
          );
        }
      }
    });
  }
  let eidt = document.querySelector(".eidt");
   eidt.addEventListener("click", h2);
}
edit();
icon.addEventListener("click", (e) => {
  if (targe !== null) {
    targe.style.backgroundColor = "transparent";
  }

  targe = e.target;
  targe.style.textAlign = "center";
  targe.style.borderRadius = "1vw";
  targe.style.backgroundColor = "#A2C4C2";
  targe.style.height = "3vw";
  targe.style.width = "7vw";

  if (e.target.textContent === "forms_add_on") {
    addTask.style.display = "block";
    eidtbut.style.display = "none";
  }
  if (e.target.textContent === "Delete") {
    deleteTask.remove();
  }
});

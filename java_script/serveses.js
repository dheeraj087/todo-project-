function allobj(name) {
  this.name = name;
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
// save the data in locle storage
const allTaskSaveObject = {
  taskName: "",
  startDtae: null,
  enddate: null,
  priorityKey: null,
};
function loclestoragesave(data) {
  localStorage.setItem(data.taskName, JSON.stringify(data));
}

function showTasksFromLocalStorage() {
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      let data = JSON.parse(localStorage.getItem(key));
      if (data && data.taskName) {
        recBoxStr.style.display = "none";
        let card = document.createElement("div");
        card.setAttribute("class", "add");
        card.innerHTML = `<div class="addinput"> 
              <input type="checkbox"/> ${data.taskName}
            </div>`;
        body.appendChild(card);
      }
    }
  }
}
function addTodo() {
  but.addEventListener("click", function (e) {
    recBoxStr.style.display = "none";
    let obj = new allobj(name.value);
    alltodo.push(obj);
    allTaskSaveObject.taskName = alltodo[i].name;
    loclestoragesave(allTaskSaveObject);
    let card = document.createElement("div");
    card.setAttribute("class", "add");
    card.innerHTML = `<div class="addinput"> <input type="checkbox"/> ${
      JSON.parse(localStorage.getItem(name.value)).taskName
    }</div>
    `;
    body.appendChild(card);

    i++;
    addTask.style.display = "none";
    name.value = "";
  });
}

addTodo();
showTasksFromLocalStorage();
let deleteTask;
function deletetodo() {
  function nu(e) {
    if (e.target.classList.contains("add")) {
      e.stopPropagation();
      // deleteTask = e.target.closest(".add"); select karanre ke kam me ata hai
      deleteTask = e.target;
      deleteTask.style.color = "red";
      setTimeout(() => {
        // deleteTask.style.color="black"
        const de = deletetodo();
        deleteTask.style.color = "black";
        removeEventListener("click", de);
        deleteTask = null;
      }, 2000);
    }
  }
  body.addEventListener("click", nu);
  return nu;
}
let targe = null;

deletetodo();

function edit() {
  let edittask = null;
  function h2() {
    function hendlar() {
      if (edittask !== null) {
        const de = deletetodo();
        body.removeEventListener("click", de);

        edittask.innerHTML = `<div class="addinput"> <input type="checkbox"/> ${name.value.trim()}</div>
    `;
        alltodo.name = name.value;
        edittask.style.color = "black";
        addTask.style.display = "none";
        but.style.display = "block";
        name.value = "";
        eidtbut.removeEventListener("click", hendlar);
      }
    }
    body.addEventListener("click", function selecttask(e) {
      if (e.target.className === "add") {
        deleteTask = null;
        edittask = e.target;
        if (edittask !== null) {
          edittask.style.color = "blue";
          addTask.style.display = "block";
          but.style.display = "none";
          eidtbut.style.display = "block";
          eidtbut.removeEventListener("click", hendlar);
          eidtbut.addEventListener("click", hendlar);
          body.removeEventListener("click", selecttask);
        }
      }
    });
  }
  let eidt = document.querySelector(".eidt");
  eidt.addEventListener("click", h2);
  cancle.addEventListener("click", function cencle(e) {
    edittask.style.color = "black";
    cancle.removeEventListener("click", cencle);
  });
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
    let str = deleteTask.textContent;
    localStorage.removeItem(str.trim());
    console.log();
    deleteTask.remove();
  }
});
function conplete() {
  body.addEventListener("change", function (e) {
    if (e.target.matches(".addinput input[type='checkbox']")) {
      let task = e.target.closest(".add");
      let tas = e.target.closest("input[type='checkbox']");
      if (tas) {
        task.style.backgroundColor = "gray";
        task.style.textDecoration = "line-through";
        task.style.opacity = 0.6;
        task.innerHTML = `<div class="addinput"> <input type="checkbox" checked/>complited</div>`;
      }
    }
  });
}
conplete();
//  notifeaction system

function checknotifaction() {
  if ("Notification" in window) {
    console.log("working");

    return true;
  } else {
    return false;
  }
}
function notifactionworkOrnot(checknotifaction) {
  let notification;
  let check = checknotifaction();
  if (check === true) {
  Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        notification=   new Notification("hellow!", {
          body: "ye mera pahala notifiction hai ",
          icon: "new img/images1.webp",
          link: "http://127.0.0.1:5500/serveses.html",
        });

        notification.onclick = function(event) {
          event.preventDefault(); // Default behavior रोकना
          console.log("igighigihjihjtjt");
          window.open('http://127.0.0.1:5500/serveses.html', '_blank');
        };
      }
    });
  } 
}



function dateSelected() {
  let sInput = document.querySelector("#stime");
  let slabel = document.querySelector(".slabel p");
  let eInput = document.querySelector("#etime");
  let elabel = document.querySelector(".elabel p");
  sInput.addEventListener("change", () => {
    let svalue = null;
    svalue = sInput.value;
    slabel.textContent = svalue + " 😁 ";
    scontrolEvent(svalue);
  });
  function scontrolEvent(svalue) {
    if (svalue === null) {
      return alert("plz selecte the time ");
    }
    let [hours, minutes] = svalue.split(":");
    let now = new Date();
    let tragetdate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes,
      0,
      0
    );
    if (tragetdate <= now) {
      tragetdate.setDate(now.getDate() + 1);
    }
    let dealy = tragetdate - now;
    setTimeout(() => {
      notifactionworkOrnot(checknotifaction);
    }, dealy);
  }

  
  // end time
  eInput.addEventListener("change", () => {
    let evalue = null;
    evalue = eInput.value;
    elabel.textContent = evalue + " 😁 ";
    econtrolEvent(evalue);
  });
  function econtrolEvent(evalue) {
    if (evalue === null) {
      return alert("plz selecte the time ");
    }
    let [ehours, einutes] = evalue.split(":");
    let now = new Date();
    let etragetdate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      ehours,
      einutes,
      0,
      0
    );
    if (etragetdate <= now) {
      etragetdate.setDate(etragetdate.getDate() + 1);
    }
    let edealy = etragetdate - now;
    setTimeout(() => {
      alert("your time is end in 1");
      const neww = document.querySelector(".audio");
      neww.play;
    }, edealy);
  }
}
dateSelected();

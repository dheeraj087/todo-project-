function allobj(name) {
  this.name = name;
}
let myChart = null;
let toorBlock;
// traget of html
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
let date = new Date();
let toorcount = 0;
//WEBSITE VISITING TOOR

function toorofTheWebsite() {
  const fristvisite = JSON.parse(localStorage.getItem("fristTimeVisite"));

  function counter() {
    toorcount++;
    toorBlock.remove();
    toor(fristvisite);
  }
  if (fristvisite === null) {
    localStorage.setItem("fristTimeVisite", JSON.stringify(false));
  }
  function toor(fristvisite) {
    toorBlock = document.createElement("div");
    toorBlock.setAttribute("class", "toor_block");

    if (fristvisite === null || (fristvisite === false && toorcount === 0)) {

      toorBlock.innerHTML = `<p>Click here to <strong>Add a Task</strong > <i>></i></p>`;
      toorBlock.style.position = "absolute";
      toorBlock.style.top = "47vh";
      toorBlock.style.left = "2vw";
      document.querySelector(".main").appendChild(toorBlock);
      document.querySelector("#tooradd").addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 1)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>Click here to <strong>add a Task</strong > <i>></i></p>`;
      toorBlock.style.top = "67vh";
      toorBlock.style.left = "25vw";
      document.querySelector(".main").appendChild(toorBlock);
      but.addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 2)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>frist Click here to <strong>edit a Task</strong > <i>></i></p>`;
      toorBlock.style.top = "40vh";
      toorBlock.style.left = "24vw";
      document.querySelector(".main").appendChild(toorBlock);
      document.querySelector(".tooredit").addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 3)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>then within a 1s Click here to edti Task<i>></i></p>`;
      toorBlock.style.top = "48vh";
      toorBlock.style.fontSize = "9px";
      toorBlock.style.left = "20vw";
      document.querySelector(".main").appendChild(toorBlock);
      document.querySelector(".add")?.addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 4)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>Click here to edti Task<i>></i></p>`;
      toorBlock.style.top = "69vh";
      toorBlock.style.fontSize = "9px";
      toorBlock.style.left = "24vw";
      document.querySelector(".main").appendChild(toorBlock);
      eidtbut.addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 5)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>then within a 1s Click here to delete Task<i>></i></p>`;
      toorBlock.style.top = "48vh";
      toorBlock.style.fontSize = "9px";
      toorBlock.style.left = "20vw";
      document.querySelector(".main").appendChild(toorBlock);
      document.querySelector(".add")?.addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 6)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>then within a 1s Click here to delete Task<i>></i></p>`;
      toorBlock.style.top = "93vh";
      toorBlock.style.fontSize = "9px";
      toorBlock.style.left = "-1vw";
      document.querySelector(".main").appendChild(toorBlock);
      document.querySelector(".delete").addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === null || (fristvisite === false && toorcount === 7)) {
      toorBlock.style.position = "absolute";
      toorBlock.innerHTML = `<p>Click here to big size of graph<i>></i></p>`;
      toorBlock.style.top = "48vh";
      toorBlock.style.fontSize = "9px";
      toorBlock.style.left = "45vw";
      document.querySelector(".main").appendChild(toorBlock);
      document.querySelector("canvas").addEventListener(
        "click",
        () => {
          counter();
        },
        { once: true }
      );
    }
    if (fristvisite === false && toorcount === 8 && toorcount > 7) {
      localStorage.setItem("fristTimeVisite", JSON.stringify(true));
    }
  }

  toor(fristvisite);
}
toorofTheWebsite();

// save the data in locle storage
const allTaskSaveObject = {
  taskName: "",
  starttime: null,
  endtime: null,
  addDate: null,
  priorityKey: null,
  complete: false,
  completeTime: null,
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
        if (data.complete === true) {
          card.setAttribute("class", "add");
          card.innerHTML = `<div class="addinput"> 
        <input type="checkbox"  checked disabled />completed: ${data.taskName}
      </div>`;
          card.style.backgroundColor = "gray";
          card.style.pointerEvents = "none";
          card.style.textDecoration = "line-through";
          body.appendChild(card);
        } else {
          card.setAttribute("class", "add");
          card.innerHTML = `<div class="addinput taskedit"> 
        <input type="checkbox"/> ${data.taskName}
      </div>`;
          body.appendChild(card);
        }
      }
    }
  }
}

// add task form enter button
function addTodo() {
  name.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      toorcount = 1;
      let validName = name.value;
      if (validName !== "") {
        recBoxStr.style.display = "none";
        let obj = new allobj(name.value);
        alltodo.push(obj);
        allTaskSaveObject.taskName = alltodo[i].name;
        allTaskSaveObject.addDate = date.toLocaleDateString();
        loclestoragesave(allTaskSaveObject);
        let card = document.createElement("div");
        card.setAttribute("class", "add");
        card.innerHTML = `<div class="addinput taskedit"> <input type="checkbox"/> ${
          JSON.parse(localStorage.getItem(name.value)).taskName
        }</div>
    `;
        body.appendChild(card);
        i++;
        addTask.style.display = "none";
        name.value = "";
      } else {
        let par = document.createElement("p");
        par.setAttribute("class", "errormes");
        par.innerHTML = "plz enter a task name";
        addTask.appendChild(par);
        setTimeout(() => {
          par.remove();
        }, 700);
      }
    }
    myChart.data.datasets[0].data = fetchallData();
    myChart.update();
  });

  // add task to  mouse click
  but.addEventListener("click", function (e) {
    let validName = name.value;
    if (validName !== "") {
      toorcount == 1;
      recBoxStr.style.display = "none";
      let obj = new allobj(name.value);
      alltodo.push(obj);
      allTaskSaveObject.taskName = alltodo[i].name;
      allTaskSaveObject.addDate = date.toLocaleDateString();
      loclestoragesave(allTaskSaveObject);
      let card = document.createElement("div");
      card.setAttribute("class", "add");
      card.innerHTML = `<div class="addinput taskedit"> <input type="checkbox"/> ${
        JSON.parse(localStorage.getItem(name.value)).taskName
      }</div>
    `;
      body.appendChild(card);
      i++;
      addTask.style.display = "none";
      name.value = "";
    } else {
      let par = document.createElement("p");
      par.setAttribute("class", "errormes");
      par.innerHTML = "plz enter a task name";
      addTask.appendChild(par);
      setTimeout(() => {
        par.remove();
      }, 700);
    }
    myChart.data.datasets[0].data = fetchallData();
    myChart.update();
  });
}

addTodo();
showTasksFromLocalStorage();

//for a deleted task

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

// edit task

function edit() {
  let edittask = null;
  function h2() {
    function hendlar() {
      if (edittask !== null && name.value !== "") {
        const de = deletetodo();
        body.removeEventListener("click", de);
        let editTaskSave = JSON.parse(
          localStorage.getItem(edittask.textContent.trim())
        );
        editTaskSave.taskName = name.value;
        localStorage.removeItem(edittask.textContent.trim());
        localStorage.setItem(name.value, JSON.stringify(editTaskSave));
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
  e.stopPropagation();
  e.preventDefault();
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
    deleteTask.remove();
    myChart.data.datasets[0].data = fetchallData();
    myChart.update();
  }
});

// task complited task
function complete() {
  body.addEventListener("change", function (e) {
    if (e.target.matches(".addinput input[type='checkbox']")) {
      let task = e.target.closest(".add");
      let tas = e.target.closest("input[type='checkbox']");
      if (tas) {
        let complitedtask = JSON.parse(
          localStorage.getItem(task.textContent.trim())
        );
        complitedtask.complete = true;

        complitedtask.completeTime = new Date().getTime();
        localStorage.setItem(
          task.textContent.trim(),
          JSON.stringify(complitedtask)
        );
        allTaskSaveObject.complete = true;
        myChart.data.datasets[0].data = fetchallData();
        myChart.update();
        task.style.backgroundColor = "gray";
        task.style.textDecoration = "line-through";
        task.style.opacity = 0.6;
        task.style.pointerEvents = "none";
        task.innerHTML = `<div class="addinput"> <input type="checkbox" checked disabled />complited</div>`;
      }
    }
  });
}

complete();

// complited task ko delite
function deleteCompletedTask() {
  for (const key in localStorage) {
    let delay;
    let data = JSON.parse(localStorage.getItem(key));
    if (!data || !data.completeTime) {
      continue;
    }
    let news = new Date(data.completeTime);
    news.setDate(news.getDate() + 1);
    delay = Math.abs(news.getTime() - new Date(data.completeTime).getTime());
    setTimeout(() => {
      if (data.complete === true) {
        localStorage.removeItem(key);
      }
    }, delay);
  }
}
deleteCompletedTask();
//  notifeaction system
function checknotifaction() {
  if ("Notification" in window) {
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
        notification = new Notification("hellow!", {
          body: "ye mera pahala notifiction hai ",
          icon: "new img/images1.webp",
          link: "http://127.0.0.1:5500/serveses.html",
        });

        notification.onclick = function (event) {
          event.preventDefault();
          window.open("http://127.0.0.1:5500/serveses.html", "_blank");
        };
      }
    });
  }
}
// for delete task
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
      neww.play();
    }, edealy);
  }
}
dateSelected();

// addd a searching funcanatity in todo list
let allData = [];

for (let index = 0; index < localStorage.length; index++) {
  let key = localStorage.key(index);
  if (key !== "fristTimeVisite") {
    let dataa = JSON.parse(localStorage.getItem(key));
    allData.push(dataa);
  }
}

function searching() {
  let searchBar = document.querySelector(".searchbar");
  searchBar.addEventListener("input", (e) => {
    if (searchBar.value !== "") {
      let valueee = searchBar.value.trim();

      let searchResult = document.createElement("div");
      searchResult.setAttribute("class", "serchresult");
      searchData(valueee, allData, searchResult);
    }
  });

  function searchData(searchstr, data, appendChildData) {
    // hame sa jabbhi kahi se api se data la rahe he ya to kuchhbhi to usame chake kar le ki kry hai ki nhi

    let filtered = data.filter((item) =>
      item?.taskName?.toLowerCase().includes(searchstr.toLowerCase())
    );
    appendChildData.innerHTML = "";
    if (filtered.length === 0) {
      appendChildData.innerHTML = `
       <ul class="list" type="1">
    <li> result is not found 😒 </li>
    </ul>
        `;
    }
    for (let index = 0; index < filtered.length; index++) {
      if (filtered.length !== 0) {
        appendChildData.innerHTML += `
    <ul class="list" type="1">
    <li>${filtered[index].taskName}</li>
    </ul>`;
      }
    }
    document.querySelector(".serach").appendChild(appendChildData);
    let list = document.querySelector(".serach");
    list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        appendChildData.remove();
        searchBar.value = "";
      }
    });
  }
}

searching();

// for a chart

function fetchallData() {
  let data_01 = [];
  let totaldata = localStorage.length - 1;
  let complitedtask = allData.filter((element) => {
    return element.complete === true;
  });
  data_01.push(totaldata);
  data_01.push(complitedtask.length);
  data_01.push(Math.abs(totaldata - complitedtask.length));

  return data_01;
}
function chartd() {
  const ctx = document.querySelector(".mide").getContext("2d");

  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Total Task", "Completed", "Not Completed"],
      datasets: [
        {
          label: "Today's Task Data",
          data: fetchallData(), // always fresh data
          fill: true,
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.4,
          borderWidth: 2,
          pointBackgroundColor: "white",
          pointBorderColor: "rgba(75, 192, 192, 1)",
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: "Today's Task Data",
          font: {
            size: 20,
          },
          color: "#333",
        },
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "#333",
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Number of Tasks",
            color: "#333",
            font: {
              size: 16,
            },
          },
          ticks: {
            color: "#333",
          },
        },
        x: {
          ticks: {
            color: "#333",
          },
        },
      },
    },
  });
}
chartd();
function updatechart() {
  let cheack = 0;

  const canvasgraph = document.querySelector("canvas");
  canvasgraph.addEventListener("click", (e) => {
    if (cheack === 0) {
      myChart.data.datasets[0].data = fetchallData();
      myChart.update();
      canvasgraph.style.maxHeight = "78vh";
      // canvasgraph.style.maxWidth = "43vw";
      canvasgraph.style.width = window.innerWidth < 600 ? "305px" : "43vw";
      myChart.resize();
      cheack = 1;
    } else {
      myChart.data.datasets[0].data = fetchallData();
      myChart.update();
      canvasgraph.style.maxHeight = "38vh";
      // canvasgraph.style.maxWidth = "33vw";
      // height: 314px;
    // width: 305px;
      canvasgraph.style.width = window.innerWidth < 600 ? "580px" : "33vw";

      myChart.resize();
      cheack = 0;
    }
  });
}
updatechart();
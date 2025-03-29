function allobj(name){
    this.name=name
  }
  let name = document.querySelector(".taskName");
  let but = document.querySelector(".addTodo");
  let dheeraj = document.querySelector("#dheeraj");
  let deletetodolist = document.querySelector("#delete");
  let body = document.querySelector(".forJSre");
  let icon =document.querySelector('.icon');
  let addTask =document.querySelector('.addTask')
  let recBoxStr =document.querySelector('.recentbox strong')
  icon.addEventListener('click',(e)=>{
   if (e.target.textContent==="forms_add_on") {
    addTask.style.display="block"
    
   }
   
  })  
  i=0
  let alltodo=[];

  function addTodo() {
    let chake =1
    but.addEventListener('click',function(e){
      if (chake==1) {
      recBoxStr.style.display="none"
      let obj = new allobj(name.value)
      alltodo.push(obj)  
      // console.log(i,alltodo);

    let card = document.createElement("div");
    card.setAttribute("class","add");
    let nj=alltodo[i]
    console.log(i,nj);
    
    card.innerHTML=
    `<div>${alltodo[i].name}</div>
    `
    body.appendChild(card)
    
    i++
    addTask.style.display="none"
    chake==0
      }
  

    
    })   
  }
  addTodo();
  function deletetodo() {
   
  }
  deletetodo();
  
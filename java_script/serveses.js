function allobj(name, diseribe){
    this.diseribe=diseribe
    this.name=name
  }
  let name = document.querySelector("#nameTodo");
  let but = document.querySelector(".addTodo");
  let dheeraj = document.querySelector("#dheeraj");
  let deletetodolist = document.querySelector("#delete");
  let body = document.querySelector(".add");
  i=0
  let alltodo=[];

  function addTodo() {
    but.addEventListener('click',function(e){
      e.preventDefault
  
      console.log(but);
      console.log(dheeraj.value);
      let obj = new allobj(name.value,dheeraj.value)
      alltodo.push(obj)  
      console.log(alltodo[i].diseribe);
      console.log(i);

    let card = document.createElement("div");
    card.setAttribute("class","card");
    card.innerHTML=
    `<div class="name"> your work name <pre>${alltodo[i].name}</pre></div>
    <div class="name"> your work <pre>${alltodo[i].diseribe}</pre></div>
    `
    body.appendChild(card)
    })   
    i++
  }
  addTodo();
  function deletetodo() {
   
  }
  deletetodo();
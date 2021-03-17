const toDoForm = document.querySelector(".js-toDoForm"),    
      toDoInput = toDoForm.querySelector("input")
      toDoList = document.querySelector(".js-toDoList"),
      finishedList = document.querySelector(".js-finishedList");

const TODOS_LS = "toDos",
      TODOSDONE_LS = "toDosDone"

let toDos = [];
let toDosDone = [];
let idNum = 1;

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}

//painting functions
function paintToDos(text){
    const li = document.createElement("li"),
         span = document.createElement("span"),
         //btns = document.createElement("div"),
         delBtn = document.createElement("button"),
         doneBtn = document.createElement("button");


         delBtn.id="delBtn";
         doneBtn.id="doneBtn";
        // delBtn.innerHTML = "❎";
         delBtn.addEventListener("click", deleteToDo);
         //doneBtn.innerHTML = "✅";
         doneBtn.addEventListener("click", moveToDone);
         span.innerText = text; 
    const newId = idNum++;
    li.appendChild(span);
   // li.appendChild(btns);
    li.appendChild(delBtn);
    li.appendChild(doneBtn);
    li.id =newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function paintToDosDone(text){
    const li = document.createElement("li"),
         span = document.createElement("span"),
         
         backBtn = document.createElement("button"),
         doneBtn = document.createElement("button");
         
         backBtn.id="backBtn"
         doneBtn.id="doneBtn";
         //backBtn.innerHTML = "❎";
         doneBtn.addEventListener("click", deleteToDoDone);
         //doneBtn.innerHTML = "✅";
         backBtn.addEventListener("click", moveToDo);
         span.innerText = text; 
    const newId = idNum++;
    li.appendChild(span);
    //li.appendChild(btns);
    li.appendChild(backBtn);
    li.appendChild(doneBtn);
    li.id =newId;
    finishedList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDosDone.push(toDoObj);
    saveToDosDone();
}
//painting functions//


//saving functions
function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveToDosDone(){
    localStorage.setItem(TODOSDONE_LS, JSON.stringify(toDosDone));
}
//saving functions//

//loading functions//
function loadToDo() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDos(toDo.text);
        });
    }
}

function loadToDoDone() {
    const loadedToDosDone = localStorage.getItem(TODOSDONE_LS);
    if (loadedToDosDone !== null) {
        const parsedToDosDone = JSON.parse(loadedToDosDone);
        parsedToDosDone.forEach(function(toDo){
            paintToDosDone(toDo.text);
        })
    }
}
//loading functions//



//deleting functions//
function deleteToDo (event) {
    const btn = event.target,
         li = btn.parentNode;
         toDoList.removeChild(li);

    const cleandToDos = toDos.filter(function(toDo){ 
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleandToDos;
    saveToDos();
}

function deleteToDoDone (event) {
    const btn = event.target,
         li = btn.parentNode;
         
         finishedList.removeChild(li);
    
    const cleandToDosDone = toDosDone.filter(function(todo) {
        return todo.id !== parseInt(li.id);
    });
    toDosDone = cleandToDosDone;
    saveToDosDone();
}
//deleting functions


//moving functions//
function moveToDone(event) {
   const btn = event.target,
       li = btn.parentNode,
       span =li.firstChild.innerText;
       toDoList.removeChild(li);

       
    
    const moveToDone = toDos.filter(function(todo){ 
        return todo.id !== parseInt(li.id);
    });
    toDos = moveToDone;
    //span is selected element of innerText of firstChild of the list
    paintToDosDone(span);
    saveToDos();
    saveToDosDone();
}

function moveToDo(event){
    const btn = event.target,
    li = btn.parentNode,
    span =li.firstChild.innerText;
    finishedList.removeChild(li);

    const moveToDo = toDosDone.filter(function(todo){ 
        return todo.id !== parseInt(li.id);
    });
    toDosDone = moveToDo;
    paintToDos(span);
    saveToDosDone();
    saveToDos();
}
//moving functions//

function init() {
    loadToDo();
    loadToDoDone();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();


const form =document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings"),
    toDoBox = document.querySelector(".js-toDoBox");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}


 function askForName() {
     form.classList.add(SHOWING_CN);
     form.addEventListener("submit", handleSubmit)
     form.addEventListener("submit", showToDo);

 }
    
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
    
}




function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName()
        hideToDo()
    } else {
        paintGreeting(currentUser);
        showToDo()
    }
}

function showToDo(){
    toDoBox.style.display="block";
}

function hideToDo(){
    toDoBox.style.display= "none";
}




function init () {
    loadName()
    
}
init();
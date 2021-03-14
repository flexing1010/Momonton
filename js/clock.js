/* const clockContainer = document.querySelector(".js-clock"),
clockTitle = clockContainer.querySelector(".js-clockTitle");

function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    clockTitle.innerText =`${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
    
}



function init () {
    getTime();
    setInterval(getTime, 1000);
}

init ();
*/


setInterval(()=>{
    let day = new Date();
let hh = day.getHours() * 30; 
let mm = day.getMinutes() * 6;
let ss = day.getSeconds() * 6;
let month = day.toLocaleString('degault', {month:'short'});
let days = day.getDate();


hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;


let hour = document.querySelector("#hour");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampm = document.querySelector("#ampm");
let date = document.querySelector("#date");

date.innerHTML = `${month} ${days}`;

let h = new Date().getHours();
let m = new Date().getMinutes();
let s = new Date().getSeconds();
let am = "AM";

if(h > 12){
    h = h - 12;
    am = "PM"
    }
    

h = (h<10) ? "0" + h : h
m = (m<10) ? "0" + m : m
s = (s<10) ? "0" + s : s


hour.innerHTML = h+":";
minutes.innerHTML=m+":";
seconds.innerHTML=s+"&nbsp";
ampm.innerHTML = am;

})
















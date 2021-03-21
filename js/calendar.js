const lang = navigator.language;
let date = new Date();

let dayNumber = date.getDate();
let month = date.getMonth();
let dayName = date.toLocaleString(lang,{weekday: "long"});
let monthName = date.toLocaleString(lang,{month: "long"});
let year = date.getFullYear();

const  calendarBg = document.querySelector("#calendar-bg");

document.querySelector("#monthName").innerText = monthName;
document.querySelector("#dayName").innerText = dayName;
document.querySelector("#dayNumber").innerText = dayNumber;
document.querySelector("#year").innerText = year;

const CALENDARBG_NUM = 3

function randomCalendarGen () {
  const calendarNum = Math.floor(Math.random()* CALENDARBG_NUM );
  return calendarNum;    
}

function paintCalendar(calNum) {
    let monthNum = month + 1;
    if (monthNum === 12 || monthNum <= 2){
        const calBg = new Image();
    calBg.src = `img/calendar/winter${calNum + 1}.jpg`;
    calendarBg.appendChild(calBg);
    } else if (monthNum >= 3 && monthNum <= 5) {
        const calBg = new Image();
    calBg.src = `img/calendar/spring${calNum + 1}.jpg`;
    calendarBg.appendChild(calBg);
    } else if (monthNum >= 6 && monthNum <= 8  ) {
        const calBg = new Image();
    calBg.src = `img/calendar/summer${calNum + 1}.jpg`;
    calendarBg.appendChild(calBg);
    } else {
        const calBg = new Image();
    calBg.src = `img/calendar/fall${calNum + 1}.jpg`;
    calendarBg.appendChild(calBg);
    }
console.log(monthNum);
    

}




function init() {
 const randomCalendar = randomCalendarGen();
 paintCalendar(randomCalendar);
 console.log(month+1);
}

init()
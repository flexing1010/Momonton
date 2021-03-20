const teTalkIcon = document.querySelector(".tennisTalk");
const melonIcon = document.querySelector(".melonIcon")
const melon = document.querySelector(".melon");
const teTalk = document.querySelector("iframe");    
const home = document.querySelector(".home");
    

function teTalkClick() {
   
   melon.classList.add("hidden");
   melon.classList.remove("showing")
   teTalk.classList.remove("hidden")
    teTalk.classList.toggle("showing");

}

function melonClick() {
    
        melon.classList.remove("hidden")
        melon.classList.toggle("showing");
        teTalk.classList.add("hidden");
        playlist.classList.remove("hidden");
        teTalk.classList.remove("showing");
        mrazPlay.classList.remove("showing");
        oasisPlay.classList.remove("showing");
        coldplayPlay.classList.remove("showing");
         maroon5Play.classList.remove("showing");
 }


function homeClick () {
    melon.classList.add("hidden");
    teTalk.classList.add("hidden");
}






function init(){
    teTalkIcon.addEventListener("click", teTalkClick);
    melonIcon.addEventListener("click", melonClick);
    home.addEventListener("click",homeClick);
}


init();


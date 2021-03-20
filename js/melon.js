const mraz = document.querySelector(".mraz"),
      coldplay = document.querySelector(".coldplay"),
      maroon5 = document.querySelector(".maroon5"),
      oasis = document.querySelector(".oasis");
    
const coldplayPlay = document.querySelector(".js-coldplay"),
      maroon5Play = document.querySelector(".js-maroon5"),
      oasisPlay = document.querySelector(".js-oasis"),
      mrazPlay = document.querySelector(".js-mraz"),
      playlist = document.querySelector(".playlist-container");


  
 
function mrazClick() {
    playlist.classList.add("hidden");
    mrazPlay.classList.add("showing");

}
function coldplayClick() {
    playlist.classList.add("hidden");
    coldplayPlay.classList.add("showing");

}
function maroon5Click() {
    playlist.classList.add("hidden");
    maroon5Play.classList.add("showing");

}
function oasisClick() {
    playlist.classList.add("hidden");
    oasisPlay.classList.add("showing");

}



function init() {
    mraz.addEventListener("click", mrazClick);
    coldplay.addEventListener("click", coldplayClick);
    maroon5.addEventListener("click", maroon5Click);
    oasis.addEventListener("click", oasisClick);

}

init()
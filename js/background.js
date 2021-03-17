const smartBg = document.querySelector(".smart-bg");

const IMG_NUMBER = 4

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `img/background/${imgNumber + 1}.jpg`;
    smartBg.appendChild(image);
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);

}

init()
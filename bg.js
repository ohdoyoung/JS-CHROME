const body = document.querySelector("body");

const IMG_NUMBER = 5;

function handleImgLoad() {
  console.log();
}

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `image/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const num = Math.floor(Math.random() * IMG_NUMBER);
  return num;
}

function init() {
  const randomNum = genRandom();
  paintImage(randomNum);
}

init();

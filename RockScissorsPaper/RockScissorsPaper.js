const img = document.querySelector(".computer > img");
let imgFlag = 2;

let flag = setInterval(() => {
  img.src = `./image/${imgFlag}.png`;
  if (imgFlag == 3) {
    imgFlag = 1;
  } else {
    imgFlag += 1;
  }
  console.log(imgFlag);
}, 1000);

const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const paper = document.querySelector(".paper");
let src;
rock.addEventListener("dragstart", (e) => {
  src = 2;
});
scissors.addEventListener("dragstart", (e) => {
  src = 3;
});
paper.addEventListener("dragstart", (e) => {
  src = 1;
});

const body = document.querySelector(".body");
img.addEventListener("dragenter", (e) => {
  if (imgFlag == src) {
    body.textContent = "무승부";
  } else if (imgFlag == 1 && src == 2) {
    body.textContent = "패배";
  } else if (imgFlag == 1 && src == 3) {
    body.textContent = "승리";
  } else if (imgFlag == 2 && src == 1) {
    body.textContent = "패배";
  } else if (imgFlag == 2 && src == 3) {
    body.textContent = "승리";
  } else if (imgFlag == 3 && src == 2) {
    body.textContent = "승리";
  } else if (imgFlag == 3 && src == 1) {
    body.textContent = "패배";
  }
  clearInterval(flag);
});
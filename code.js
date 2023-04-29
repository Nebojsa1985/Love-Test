const container = document.querySelector(".container");
const left = document.querySelector(".left");
const middle = document.querySelector(".middle");
const right = document.querySelector(".right");
const result = document.querySelector(".result");
const menu = document.querySelector(".menu");
const menubtn = document.querySelector(".menubtn");

let leftstate = false;
let rightstate = false;

const answers = [
  "Two of you, no way",
  "Total match, ideal for each other",
  "Fatal atraction, ment to be",
  "Maybe baby",
  "Tough, each of you must work hard",
  "Just friends, sorry",
  "Sex animals, hours of pleasure",
];

menubtn.addEventListener("click", switchmenu);

function switchmenu() {
  menu.style.display = "none";
  container.style.display = "flex";
}

left.addEventListener("click", handleLeft);
right.addEventListener("click", handleRight);

function handleLeft() {
  console.log("left");
  leftstate = true;
  console.log(leftstate);
  matched();
}

function handleRight() {
  console.log("right");
  rightstate = true;
  console.log(rightstate);
  matched();
}

function matched() {
  if (leftstate && rightstate) {
    console.log("NeX");
    console.log(answers[Math.floor(Math.random() * answers.length)]);
    setTimeout(() => {
      left.style.opacity = 0.1;
      middle.style.opacity = 0.1;
      right.style.opacity = 0.1;
      result.innerHTML = answers[Math.floor(Math.random() * answers.length)];
      result.style.display = "flex";
      left.removeEventListener("click", handleLeft);
      right.removeEventListener("click", handleRight);
    }, 2000);
    setTimeout(() => {
      location.reload();
    }, 5500);
  }
}

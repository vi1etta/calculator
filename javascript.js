const mainContainer = document.querySelector(".btn-holder");
mainContainer.addEventListener("click", populateValue);

const dispayText = document.querySelector("#dispayText");

const videoWrapper = document.querySelector("#video-wrapper");
const video = document.querySelector("#hover-video");

const resetBtn = document.querySelector("#clearBtn");

resetBtn.addEventListener("mouseenter", showVideo);
resetBtn.addEventListener("mouseleave", hideVideo);

// Function to show video
function showVideo() {
  videoWrapper.style.opacity = 1;
  video.play();
  console.log("Hi!")
}
// Function to hide video
function hideVideo() {
  videoWrapper.style.opacity = 0;
  video.pause();
  video.currentTime = 0;
}



let a = "";
let b = "";

let sign = "";
let aIsCompleted = false;
let result;

function populateValue(e) {
  if (e.target.matches("#digit") && aIsCompleted === false) {
    a += e.target.textContent;
    dispayText.textContent = a;
    console.log(a);
  }
  if (e.target.matches("#math")) {
    aIsCompleted = true;
    sign = e.target.textContent;
    dispayText.textContent = a + sign;
    console.log(sign);
  }
  if (e.target.matches("#digit") && aIsCompleted === true && sign !== "") {
    b += e.target.textContent;
    dispayText.textContent = a + sign + b;
    console.log(a + sign + b);
  }
  if (
    e.target.matches("#equal") &&
    aIsCompleted === true &&
    sign != "" &&
    b != ""
  ) {
    operate(a, sign, b);
  }

  if (e.target.matches("#clearBtn")) {
    a = "";
    b = "";
    sign = "";
    aIsCompleted = false;
    result;
    dispayText.textContent = "Put a number";
  }
}

function operate(aValue, signValue, bValue) {
  switch (signValue) {
    case "÷":
      result = Number(aValue) / Number(bValue);
      dispayText.textContent = result;
      a = result;
      b = "";
      sign = "";
      break;

    case "+":
      result = Number(aValue) + Number(bValue);
      dispayText.textContent = result;
      a = result;
      b = "";
      sign = "";
      console.log(result);
      break;
    case "×":
      result = Number(aValue) * Number(bValue);
      dispayText.textContent = result;
      a = result;
      b = "";
      sign = "";
      console.log(result);
      break;
    case "-":
      result = Number(aValue) - Number(bValue);
      dispayText.textContent = result;
      a = result;
      b = "";
      sign = "";
      console.log(result);
      break;
  }
  console.log("It's work!");
}
console.log(result);

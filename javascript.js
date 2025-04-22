const mainContainer = document.querySelector(".btn-holder");
mainContainer.addEventListener("click", populateValue);
const successSound = document.querySelector("#successSound");
const btnClickSound = document.querySelector("#btnClickSound");
const btnReset = document.querySelector("#btnReset");
const dispayText = document.querySelector("#dispayText");

let a = "";
let b = "";

let sign = "";
let aIsCompleted = false;
let result;

function playSound(targetID) {
  if (targetID === "equal") {
    successSound.currentTime = 0; // rewind to start
    successSound.play();
  }
  if (targetID === "math" || targetID === "digit") {
    btnClickSound.currentTime = 0; // rewind to start
    btnClickSound.play();
  }

  if (targetID === "clearBtn") {
    btnReset.currentTime = 0;
    btnReset.play();
  }
}

function populateValue(e) {
  if (
    e.target.matches("#digit") &&
    aIsCompleted === false &&
    result === undefined &&
    sign === "" &&
    b === ""
  ) {
    a += e.target.textContent;
    dispayText.textContent = a;
    console.log(a);
    playSound(e.target.id);
  }
  if (e.target.matches("#math")) {
    aIsCompleted = true;
    sign = e.target.textContent;
    dispayText.textContent = a + sign;
    console.log(sign);
    playSound(e.target.id);
  }
  if (e.target.matches("#digit") && aIsCompleted === true && sign !== "") {
    b += e.target.textContent;
    dispayText.textContent = a + sign + b;
    console.log(a + sign + b);
    playSound(e.target.id);
  }
  if (
    e.target.matches("#equal") &&
    aIsCompleted === true &&
    sign != "" &&
    b != ""
  ) {
    operate(a, sign, b);
    playSound(e.target.id);
  }

  if (e.target.matches("#equal") && aIsCompleted === false) {
    showSnackbar();
  }

  if (e.target.matches("#clearBtn")) {
    a = "";
    b = "";
    sign = "";
    aIsCompleted = false;
    result;
    dispayText.textContent = "Put a number";
    playSound(e.target.id);
  }

  //next code for round 2+
  if (
    e.target.matches("#digit") &&
    result != undefined &&
    sign === "" &&
    b === "" &&
    a === ""
  ) {
    a += e.target.textContent;
    dispayText.textContent = a;

    console.log("next round");
    playSound(e.target.id);
  }

  if (
    e.target.matches("#math") &&
    a === "" &&
    result != undefined &&
    b === ""
  ) {
    a = result;
    aIsCompleted = true;
    sign = e.target.textContent;
    dispayText.textContent = a + sign;
    console.log(sign, "round with sum of result success");
    playSound(e.target.id);
  }
}

function operate(aValue, signValue, bValue) {
  switch (signValue) {
    case "÷":
      result = Number(aValue) / Number(bValue);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      break;

    case "+":
      result = Number(aValue) + Number(bValue);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      console.log(result);
      break;
    case "×":
      result = Number(aValue) * Number(bValue);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      console.log(result);
      break;
    case "-":
      result = Number(aValue) - Number(bValue);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      console.log(result);
      break;
  }
}

function showSnackbar() {
  const snackbar = document.querySelector("#snackbar");
  snackbar.className = "show";
  snackbar.textContent = "Choose sign!";
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

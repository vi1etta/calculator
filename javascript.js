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
let result = undefined;

function playSound(targetClassName) {
  if (targetClassName === "equal") {
    successSound.currentTime = 0; // rewind to start
    successSound.play();
  }
  if (targetClassName === "math" || targetClassName === "digit") {
    btnClickSound.currentTime = 0; // rewind to start
    btnClickSound.play();
  }

  if (targetClassName === "clearBtn") {
    btnReset.currentTime = 0;
    btnReset.play();
  }
}

function populateValue(e) {
  if (
    e.target.classList.contains("digit") &&
    aIsCompleted === false &&
    result === undefined &&
    sign === "" 
  ) {
    a += e.target.textContent;
    dispayText.textContent = a;
    console.log("this is " , a);
    playSound(e.target.className);
  }
  if (e.target.classList.contains("math") && sign==="")  {
    aIsCompleted = true;
    sign = e.target.textContent;
    dispayText.textContent = a + sign;
    console.log(sign);
    playSound(e.target.className);
  }
  if (
    e.target.classList.contains("digit") &&
    aIsCompleted === true &&
    sign !== "" 
  ) {
    b += e.target.textContent;
    dispayText.textContent = a + sign + b;
    console.log(a + sign + b);
    playSound(e.target.className);
  }
  if (
    e.target.classList.contains("equal") &&
    aIsCompleted === true &&
    sign != "" &&
    b != ""
  ) {
    operate(a, sign, b);
    playSound(e.target.className);
  }

  if (e.target.classList.contains("equal") && aIsCompleted === false) {
    showSnackbar("Choose math sign");
  }

  if (e.target.classList.contains("clearBtn")) {
    a = "";
    b = "";
    sign = "";
    aIsCompleted = false;
    result= undefined;
    dispayText.textContent = "Put a number";
    playSound(e.target.className);
  }

  //next code for round 2+
  if (
    e.target.classList.contains("digit") &&
    result != undefined &&
    sign === "" &&
    b === "" &&
    a === ""
  ) {
    a += e.target.textContent;
    dispayText.textContent = a;
    playSound(e.target.className);
  }

  if (
    e.target.classList.contains("math") &&
    a != "" &&
    b != ""
  ) {
    showSnackbar("Only 2 values at one operation");
    
    playSound(e.target.className);
  }
  if ( e.target.classList.contains("math") && result!=undefined && a===""){
    a=result;
    b="";
    dispayText.textContent = a+sign+b;
    console.log("this is the case")
  }
  
}

function operate(firstOperand, operator, secondOperand) {
  switch (operator) {
    case "÷":
      result = Number(firstOperand) / Number(secondOperand);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      break;

    case "+":
      result = Number(firstOperand) + Number(secondOperand);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      console.log(result);
      break;
    case "×":
      result = Number(firstOperand) * Number(secondOperand);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      console.log(result);
      break;
    case "-":
      result = Number(firstOperand) - Number(secondOperand);
      dispayText.textContent = result;
      a = "";
      b = "";
      sign = "";
      console.log(result);
      break;
  }
}

function showSnackbar(value) {
  const snackbar = document.querySelector("#snackbar");
  snackbar.className = "show";
  snackbar.textContent = value;
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

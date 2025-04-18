const mainContainer = document.querySelector(".btn-holder");
mainContainer.addEventListener("click", populateValue);

const dispayText = document.querySelector("#dispayText");

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

function operate(a, sign, b) {
  switch (sign) {
    case "÷":
      result = Number(a) / Number(b);
      dispayText.textContent = result;
      break;

    case "+":
      result = Number(a) + Number(b);
      dispayText.textContent = result;
      console.log(result);
      break;
    case "×":
      result = Number(a) * Number(b);
      dispayText.textContent = result;
      console.log(result);
      break;
    case "-":
      result = Number(a) - Number(b);
      dispayText.textContent = result;
      console.log(result);
      break;
  }
  console.log("It's work!");
}
console.log(result);
/*мне нужно , что бы система продолжала записывать число а до тех пор, пока юзер
не кликнет мат знак или равно. далее если это не знак равно, то система должна
начать записывать аргумент б, и это так же, до тех пор, пока юзер не нажмет равно. 
далее два аргумента передаются на мат функцию 

для обозначение мат знаков, я могу доавбить им айдишник и смотреть на него. */

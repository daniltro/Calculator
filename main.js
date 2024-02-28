let a = "";
let b = "";
let sign = "";
let finish = false;

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const actions = ["+", "-", "*", "/", "%", "+/-"];

const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

function clearAll() {
  a = "";
  b = "";
  sign = "";
  finish = false;
  display.textContent = "0";
}

document.querySelector(".ac").addEventListener("click", function () {
  clearAll();
});

buttons.addEventListener("click", function (event) {
  if (!event.target.classList.contains("button")) return;
  if (event.target.classList.contains("ac")) return;

  display.textContent = "";

  const key = event.target.textContent;

  if (numbers.includes(key)) {
    if (b === "" && sign === "") {
      a += key;
      display.textContent = a;
    } else if (a !== "" && sign !== "" && finish) {
      b = key;
      finish = false;
      display.textContent = b;
    } else {
      b += key;
      display.textContent = b;
    }
    return;
  }

  if (key === "%") {
    a = a / 100;
    finish = true;
    display.textContent = a;
    return;
  }

  if (key === "+/-") {
    a = a * -1;
    finish = true;
    display.textContent = a;
    return;
  }

  if (actions.includes(key)) {
    sign = key;
    display.textContent = sign;
    return;
  }
  
  if (key === "=") {
    if (b === "") {
      b = a;
    }
    switch (sign) {
      case "+":
        a = Number(a) + Number(b);
        break;
      case "-":
        a = a - b;
        break;
      case "*":
        a = a * b;
        break;
      case "/":
        if (b === "0") {
          display.textContent = "Ошибка";
          a = "";
          b = "";
          sign = "";
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    display.textContent = a;
  }
});

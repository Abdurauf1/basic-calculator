var result = 0;
var actionType = "";
var equalClicked = false;

function numberClicked(number) {
  var inputTag = document.getElementById("input");
  var inputValue = inputTag.value;
  if (inputValue === "0" || equalClicked) {
    inputValue = number;
  } else {
    inputValue += number;
  }
  equalClicked = false;
  inputTag.value = inputValue;
}

function actionClicked(action) {
  const inputTag = document.getElementById("input");
  const inputValue = Number(inputTag.value);
  inputTag.value = 0;

  if (action === "=") {
    if (actionType === "") {
      result = inputValue;
    } else {
      switch (actionType) {
        case "+":
          result += inputValue;
          break;
        case "-":
          result -= inputValue;
          break;
        case "*":
          result *= inputValue;
          break;
        case "/":
          result /= inputValue;
          break;
      }
    }
    inputTag.value = result;
    actionType = "";
    equalClicked = true;
    result = 0;
  } else {
    if (actionType === "") {
      result = inputValue;
    } else {
      switch (actionType) {
        case "+":
          result += inputValue;
          break;
        case "-":
          result -= inputValue;
          break;
        case "*":
          result *= inputValue;
          break;
        case "/":
          result /= inputValue;
          break;
      }
    }
    actionType = action;
  }
}

function cleanInput() {
  document.getElementById("input").value = 0;
  result = 0;
}

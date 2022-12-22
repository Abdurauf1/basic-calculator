var result: number = 0;
var actionType: string = "";
var equalClicked: boolean = false;

function numberClicked(number: number) {
  var inputTag = document.getElementById("input") as HTMLInputElement;
  var inputValue: any = inputTag.value;
  if (inputValue === "0" || equalClicked) {
    inputValue = number;
  } else {
    inputValue += number;
  }
  equalClicked = false;
  inputTag.value = inputValue;
}

function actionClicked(action: string) {
  const inputTag: any = document.getElementById("input") as HTMLInputElement;
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
  let inputValue: any = document.getElementById("input");
  inputValue = 0;
  result = 0;
}

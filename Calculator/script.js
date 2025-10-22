let display = document.querySelector(".display");
let buttons = document.querySelectorAll("button");
let string = "";

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const btnValue = e.target.innerHTML;

    if (btnValue == '=') {
      try {
        string = eval(string);
        display.value = string;
      } catch {
        display.value = "Error";
        string = "";
      }
    } else if (btnValue == 'AC') {
      string = "";
      display.value = string;
    } else {
      string += btnValue;
      display.value = string;
    }
  });
});

const digits = document.querySelectorAll(".digit");

digits[0].focus();

digits.forEach((digit, index) => {
  digit.addEventListener("keyup", (e) => {
    if (e.key != "Backspace") {
      digit.value = e.key;
      digits[index + 1].focus();
    } else {
      if (digit.value.length == 0) {
        digits[index - 1].focus();
      }
    }
  });
});

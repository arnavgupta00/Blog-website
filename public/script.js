
for (let di = 0; di < document.querySelectorAll(".button_t").length; di++) {
    let index = di; // Capture the current value of di in a separate variable
    document.querySelectorAll(".button_t")[index].addEventListener("click", function () {
      document.querySelectorAll(".button_t")[index].classList.add("clicked");
      setTimeout(function () {
        document.querySelectorAll(".button_t")[index].classList.remove("clicked");
      }, 500);
    });
}
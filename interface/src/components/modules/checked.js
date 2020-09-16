export function checked() {
  document
    .querySelectorAll(".switch.custom-control-input")
    .forEach((checkbox) => {
      if (checkbox.checked) {
        const check = document.querySelectorAll(".feather-check");
        check.forEach((el) => {
          if (el.dataset.id === checkbox.value) {
            el.classList.remove("hide");
          }
        });
      } else {
        const check = document.querySelectorAll(".feather-check");
        check.forEach((el) => {
          if (el.dataset.id === checkbox.value) {
            el.classList.add("hide");
          }
        });
      }
    });
}

export function checked() {
  document
    .querySelectorAll(".switch.custom-control-input")
    .forEach((checkbox) => {
      if (checkbox.checked) {
        const check = document.querySelectorAll(".feather-check");
        check.forEach((el) => {
          setTimeout(() => {
            if (el.dataset.id === checkbox.value) {
              if (
                checkbox.parentNode.parentNode.parentNode.dataset.state ===
                "hidden"
              ) {
                el.classList.remove("hide");
              } else {
                el.classList.add("hide");
              }
            }
          }, 500);
        });
      }
    });
}

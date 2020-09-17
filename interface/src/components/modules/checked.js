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
                console.log("PARENTNODE HIDDEN");
                el.classList.remove("hide");
              } else {
                console.log("PARENTNODE SHOWN");
                el.classList.add("hide");
              }
            }
          }, 500);
        });
      } else {
        const check = document.querySelectorAll(".feather-check");
        check.forEach((el) => {
          /*   if (el.dataset.id === checkbox.value) {
            console.log("PARENTNODE SHOWN");
            el.classList.add("hide");
          } */
        });
      }
    });
}

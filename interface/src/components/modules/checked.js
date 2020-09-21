export function checked() {
  console.log("[function] || checked.js || checked");
  const checkmarks = document.querySelectorAll(".feather-check");
  const checkboxes = document.querySelectorAll(".switch.custom-control-input");

  checkboxes.forEach((checkbox) => {
    //if the checkbox is checked
    if (checkbox.checked) {
      checkmarks.forEach((checkmark) => {
        setTimeout(() => {
          //if the data-state of checkmark matches the value of checkbox (an id)
          if (checkmark.dataset.id === checkbox.value) {
            //if accordion is hidden, show checkmark
            if (checkbox.parentNode.parentNode.parentNode.dataset.state === "hidden") {
              checkmark.classList.remove("hide");
            } else {
              checkmark.classList.add("hide");
            }
          }
        }, 500);
      });
    }
  });
}

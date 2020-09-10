export function popup() {
  document
    .querySelectorAll("#accordion2 > div > div.Media > svg")
    .forEach((task) => {
      task.addEventListener("click", function () {
        document.querySelector(".Popup").classList.remove("hide");
      });
    });
}

export function close() {
  document.querySelector(".Popup").classList.add("hide");
}

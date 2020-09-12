export function popup() {
  document.querySelector(".Popup").classList.remove("hide");
}

export function close() {
  document.querySelector(".Popup").classList.add("hide");
  document.querySelectorAll(".Popover").forEach((popover) => {
    popover.classList.add("hide");
    popover.classList.remove("video");
    popover.classList.remove("docs");
  });
}

export function popup() {
  document.querySelector(".Popup").classList.remove("hide");
}

export function close() {
  const image = document.querySelector(".Popup ul.image");
  document.querySelector(".Popup").classList.add("hide");
  if (image) {
    document.querySelectorAll(".Popover").forEach((popover) => {
      popover.classList.add("hide");
      popover.classList.remove("video");
      popover.classList.remove("docs");
    });
  }
}

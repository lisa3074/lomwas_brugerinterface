export function popup(e) {
  document.querySelector(".Popup").classList.remove("hide");
}

export function close(e) {
  if (
    e.classList.contains("Popup") ||
    e.classList.contains("close-it") ||
    e.nodeName === "line"
  ) {
    const image = document.querySelector(".Popup ul.image");

    if (image) {
      console.log("do nothing");
      document.querySelectorAll(".feather-film").forEach((video) => {
        video.classList.remove("video");
      });
      document.querySelectorAll(".feather-file").forEach((file) => {
        file.classList.remove("docs");
      });
    }
    document.querySelector(".Popup").classList.add("hide");
    if (image) {
      document.querySelectorAll(".Popover").forEach((popover) => {
        popover.classList.add("hide");
        popover.classList.remove("video");
        popover.classList.remove("docs");
      });
    }
  } else {
    return;
  }
}

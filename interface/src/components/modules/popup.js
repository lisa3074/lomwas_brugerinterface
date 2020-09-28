export function popup() {
  console.log("[function] || popup.js | popoverVideo");
  document.querySelector(".Popup").classList.remove("hide");
}

export function close(e, setI) {
  console.log("[function] || popup.js | close | e: " + e);
  const image = document.querySelector(".Popup ul.image");
  if (e.classList.contains("Popup") || e.classList.contains("close-it") || e.nodeName === "line") {
    document.querySelector(".Popup").classList.add("hide");
    setI(0);
    if (image) {
      document.querySelectorAll(".feather-film, .feather-file").forEach((el) => {
        el.classList.remove("video", "docs");
      });
      document.querySelectorAll(".Popover").forEach((popover) => {
        popover.classList.add("hide");
        popover.classList.remove("video", "docs");
      });
    }
  } else {
    return;
  }
}

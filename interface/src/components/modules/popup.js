export function popup(e) {
  document.querySelector(".Popup").classList.remove("hide");
}

export function close() {
  const image = document.querySelector(".Popup ul.image");
  const video = document.querySelector(".Popup ul.video");
  const docs = document.querySelector(".Popup ul.docs");

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
}

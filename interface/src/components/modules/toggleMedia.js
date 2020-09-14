export function toggleMedia() {
  const eSwitch = document.querySelector("#customSwitch1");
  console.log("toggleMedia");
  if (eSwitch.checked === true) {
    document.querySelectorAll(".Media").forEach((section) => {
      section.classList = "Media fade-media-in";
      setTimeout(() => {
        section.classList.remove("hide");
        section.classList.remove("fade-media-in");
      }, 500);
    });
  } else {
    document.querySelectorAll(".Media").forEach((section) => {
      section.classList = "Media fade-media-out";
      setTimeout(() => {
        section.classList.add("hide");
        section.classList.remove("fade-media-out");
      }, 500);
      document.querySelectorAll(".Popover").forEach((popover) => {
        popover.classList.add("hide");
        popover.classList.remove("video");
        popover.classList.remove("docs");
      });
    });
  }
}

export function toggleMedia() {
  const eSwitch = document.querySelector("#customSwitch1");
  console.log("toggleMedia");
  if (eSwitch.checked === true) {
    document.querySelectorAll(".Media").forEach((section) => {
      section.classList = "Media fade-media-in";
      setTimeout(() => {
        section.classList.remove("hide");
      }, 500);
    });
  } else {
    document.querySelectorAll(".Media").forEach((section) => {
      section.classList = "Media fade-media-out";
      setTimeout(() => {
        section.classList.add("hide");
      }, 500);
    });
  }
}

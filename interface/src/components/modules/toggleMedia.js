export function toggleMedia() {
  const eSwitch = document.querySelector("#customSwitch1");
  console.log("toggleMedia");
  if (eSwitch.checked === true) {
    console.log("checked");
    document.querySelectorAll(".Media").forEach((section) => {
      section.classList = "Media fade-media-in";
      setTimeout(() => {
        section.classList.remove("hide");
      }, 500);
    });
  } else {
    console.log("unchecked");
    document.querySelectorAll(".Media").forEach((section) => {
      section.classList = "Media fade-media-out";
      setTimeout(() => {
        section.classList.add("hide");
      }, 500);
    });
  }
}

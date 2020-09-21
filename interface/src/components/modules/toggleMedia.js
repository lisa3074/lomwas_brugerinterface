export function toggleMedia() {
  const ekstra = document.querySelector("#customSwitch1");
  console.log("[function] || toggleMedia.js | toggleMedia");

  if (ekstra.checked === true) {
    document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
      if (accordion.dataset.state === "shown") {
        accordion.querySelector(".Media").classList = "Media fade-media-in";
        setTimeout(() => {
          accordion.querySelector(".Media").classList = "Media";
        }, 500);
      }
    });
  } else {
    document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
      document.querySelectorAll(".Popover").forEach((popover) => {
        popover.classList.add("hide");
        popover.classList.remove("video", "docs");
      });
      document.querySelectorAll(".Media svg").forEach((svg) => {
        svg.classList.remove("video", "docs");
      });
      if (accordion.dataset.state === "shown") {
        accordion.querySelector(".Media").classList = "Media fade-media-out";
        setTimeout(() => {
          accordion.querySelector(".Media").classList = "Media hide";
        }, 500);
      } else {
        accordion.querySelector(".Media").classList = "Media hide";
      }
    });
  }
}

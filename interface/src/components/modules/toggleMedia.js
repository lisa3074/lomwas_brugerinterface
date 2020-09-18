export function toggleMedia() {
  const eSwitch = document.querySelector("#customSwitch1");
  console.log("toggleMedia");

  if (eSwitch.checked === true) {
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
        popover.classList.remove("video");
        popover.classList.remove("docs");
      });
      document.querySelectorAll(".Media svg").forEach((svg) => {
        svg.classList.remove("video");
        svg.classList.remove("docs");
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

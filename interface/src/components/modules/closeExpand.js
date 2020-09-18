import { checked } from "./checked.js";
export function closeExpand(id) {
  console.log("closeExpand");
  /* let count = 0; */
  checked();
  document.querySelectorAll(".feather-film").forEach((video) => {
    video.classList.remove("video");
  });
  document.querySelectorAll(".feather-file").forEach((file) => {
    file.classList.remove("docs");
  });
  const extra = document.querySelector("#customSwitch1");

  document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
    /*   count++; */
    if (!accordion.classList.contains(id)) {
      if (accordion.dataset.state === "shown") {
        accordion.dataset.state = "hidden";
        document.querySelectorAll(".Popover").forEach((popover) => {
          popover.classList.add("hide");
          popover.classList.remove("video");
          popover.classList.remove("docs");
        });
      }
    } else if (accordion.classList.contains(id)) {
      if (accordion.dataset.state === "shown") {
        accordion.dataset.state = "hidden";
        document.querySelectorAll(".Popover").forEach((popover) => {
          popover.classList.add("hide");
          popover.classList.remove("video");
          popover.classList.remove("docs");
        });
      } else {
        accordion.dataset.state = "shown";
        accordion.querySelector(".Switch").classList.remove("hide");
        if (extra.checked === true) {
          accordion.querySelectorAll(".Media, .Switch").forEach((el) => {
            el.classList.remove("hide");
          });
        }
      }
    }
  });
}

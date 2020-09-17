import { checked } from "./checked.js";
export function closeExpand(id) {
  console.log("closeExpand");
  console.log(id);

  let count = 0;
  checked();
  document.querySelectorAll(".feather-film").forEach((video) => {
    video.classList.remove("video");
  });
  document.querySelectorAll(".feather-file").forEach((file) => {
    file.classList.remove("docs");
  });
  const extra = document.querySelector("#customSwitch1");

  document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
    count++;
    if (!accordion.classList.contains(id)) {
      if (accordion.dataset.state === "start") {
      } else {
        accordion.dataset.state = "hidden";
        if (accordion.dataset.state === "hidden") {
          if (extra.checked === true) {
            setTimeout(() => {
              document.querySelector(".Media").classList.remove("hide");
            }, 500);
            document.querySelector(".Switch").classList.remove("hide");
          }
        }
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
        if (extra.checked === true) {
          setTimeout(() => {
            console.log("SHOW");
            document.querySelectorAll(".Media, .Switch").forEach((el) => {
              el.classList.remove("hide");
            });
          }, 0);
        }
      }
    }
  });
}
/* parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.document.querySelector(".extra > .custom-control > .custom-control-input").checked */

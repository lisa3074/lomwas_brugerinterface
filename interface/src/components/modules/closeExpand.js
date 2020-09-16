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
  document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
    count++;
    console.log(count);
    if (!accordion.classList.contains(id)) {
      accordion.dataset.state = "hidden";
      document.querySelectorAll(".Popover").forEach((popover) => {
        popover.classList.add("hide");
        popover.classList.remove("video");
        popover.classList.remove("docs");
      });
    } else if (accordion.classList.contains(id)) {
      if (accordion.dataset.state === "shown") {
        accordion.dataset.state = "hidden";
      } else {
        accordion.dataset.state = "shown";
      }
    }
  });
}

import { checked } from "./checked.js";

export function closeExpand(id) {
  console.log("[function] || closeExpand.js || closeExpand");
  const extra = document.querySelector("#customSwitch1");

  checked();
  document.querySelectorAll(".feather-film, .feather-file").forEach((svg) => {
    svg.classList.remove("video", "docs");
  });

  document.querySelector("#finish").dataset.state = "firstClick";

  document.querySelectorAll(".accordion-wrapper").forEach((accordion) => {
    //if an accordions does not match the id of the clicked accordion && the data-state is shown -> close it
    if (!accordion.classList.contains(id) && accordion.dataset.state === "shown") {
      accordion.dataset.state = "hidden";
      resetPopover();
      //if an accordions does match the id of the clicked accordion && the data-state is shown -> close it
    } else if (accordion.classList.contains(id) && accordion.dataset.state === "shown") {
      accordion.dataset.state = "hidden";
      resetPopover();
      //if an accordions does match the id of the clicked accordion && the data-state is not shown -> open it
    } else if (accordion.classList.contains(id) && accordion.dataset.state !== "shown") {
      accordion.dataset.state = "shown";
      accordion.querySelector(".Switch").classList.remove("hide");
      //if extra is checked, reveal media options and the done switch on the accordion
      if (extra.checked === true) {
        accordion.querySelectorAll(".Media, .Switch").forEach((el) => {
          el.classList.remove("hide");
        });
      }
    }
  });
}

function resetPopover() {
  document.querySelectorAll(".Popover").forEach((popover) => {
    popover.classList.add("hide");
    popover.classList.remove("video", "docs");
  });
}

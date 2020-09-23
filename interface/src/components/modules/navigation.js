import { FetchData } from "./fetchData.js";

const HTML = {};

function init() {
  // "Global vars"
  HTML.start = document.querySelector("#start");
  HTML.finish = document.querySelector("#finish");
  HTML.reset = document.querySelector(".btn.btn-outline-light.reset");
  HTML.checkboxeS = document.querySelectorAll(".switch.custom-control-input");
  HTML.unfinishedBox = document.querySelector(".unfinished-container");
  HTML.reason = document.querySelector("#reason");
  HTML.customRadio1 = document.querySelector("#customRadio1");
  HTML.customRadio2 = document.querySelector("#customRadio1");
  HTML.reason_required = document.querySelector(".reason");
  HTML.error = document.querySelector(".error");
}

export function start() {
  console.log("[function] || navigation.js || start");
  init();
  HTML.finish.dataset.state = "hidden firstClick";
  HTML.start.classList.add("hide");
  HTML.finish.classList.remove("hide");
  HTML.finish.disabled = true;
  HTML.reset.dataset.state = "shown";

  HTML.checkboxeS.forEach((checkbox) => {
    //set all to unchecked
    checkbox.disabled = false;
    checkbox.addEventListener("click", () => {
      if (checkbox.checked === false) {
        HTML.finish.disabled = true;
      }
      HTML.checkboxeS.forEach((checkbox) => {
        if (checkbox.checked) {
          HTML.finish.disabled = false;
        }
      });
    });
  });
}

export function reset() {
  console.log("[function] || navigation.js || reset");
  init();
  // Vars
  const checkmarkS = document.querySelectorAll(".feather-check");

  HTML.finish.dataset.state = "hidden firstClick";
  HTML.start.classList.remove("hide");
  HTML.finish.classList.add("hide");
  HTML.reset.dataset.state = "hidden";

  //Set attributes and classes
  HTML.error.textContent = "";
  HTML.reason.value = "";
  HTML.customRadio2.checked = false;
  HTML.customRadio1.checked = true;
  HTML.reason_required.classList.add("hide");
  HTML.reason.classList.add("hide");
  HTML.reason.removeAttribute("required");

  //set all checkboxes to disabled and unchecked and hide all checkmarks and the inputfield for unfinished tasks
  HTML.checkboxeS.forEach((checkbox) => {
    checkbox.disabled = true;
    checkbox.checked = false;
  });
  checkmarkS.forEach((checkmark) => {
    checkmark.classList.add("hide");
  });
  HTML.unfinishedBox.dataset.state = "hidden";
}

export function finish() {
  console.log("[function] || navigation.js || finish");
  init();
  //Vars
  const checkboxeS = document.querySelectorAll(".switch");
  let checkedElementCount = 0;
  let elementCount = 0;

  checkboxeS.forEach(() => {
    //counting how many checkboxes (tasks) exist on this building
    elementCount++;
  });

  checkboxeS.forEach((el) => {
    if (el.checked === true) {
      //counting how many checkboxes are checked
      checkedElementCount++;
      shouldPut();
      function shouldPut() {
        console.log(
          "[count] || navigation.js | finish | " + checkedElementCount + " out of " + elementCount + " tasks finished"
        );
        //If amount of checkboxes checked is equal to amount of checkboxes PUT the data
        if (checkedElementCount === elementCount) {
          HTML.unfinishedBox.dataset.state = "hidden";
          FetchData.putTasks();
          reset();
          //GET tasks der er running=false
        }
        //depending on the data-state of the finish button
        else if (HTML.finish.dataset.state === "hidden firstClick") {
          HTML.unfinishedBox.dataset.state = "shown";
          setTimeout(() => {
            HTML.finish.dataset.state = "secondClick";
          }, 500);
        } else if (HTML.finish.dataset.state === "secondClick" && HTML.customRadio1.checked) {
          HTML.finish.dataset.state = "hidden firstClick";
          HTML.error.textContent = "";
          //HER SKAL DER SENDES TIL DB (PUT)
          FetchData.putTasks();
          //GET tasks der er running=false
          reset();
        } else if (
          HTML.finish.dataset.state === "secondClick" &&
          !HTML.customRadio1.checked &&
          HTML.reason.value !== ""
        ) {
          HTML.finish.dataset.state = "hidden firstClick";
          //HER SKAL DER SENDES TIL DB (PUT)
          FetchData.putTasks();
          HTML.error.textContent = "";
          //GET tasks der er running=false
          reset();
        } else {
          HTML.error.textContent = " || Du mangler at udfylde en beskrivelse";
        }
      }
    }
  });
}

export function unable() {
  console.log("[function] || navigation.js || unable");
  init();

  //should the input field
  document.querySelectorAll(".unfinished input").forEach((el) => {
    el.addEventListener("change", () => {
      if (HTML.customRadio1.checked) {
        HTML.reason_required.classList.add("hide");
        HTML.reason.classList.add("hide");
        HTML.reason.removeAttribute("required");
      } else {
        HTML.reason_required.classList.remove("hide");
        HTML.reason.classList.remove("hide");
        HTML.reason.setAttribute("required", true);
      }
    });
  });
}

export function saveProgress(e) {
  console.log("[function] || navigation.js || saveProgress");
  document.querySelector(".save-progress").classList = "save-progress fade-in-modal";
}
export function returnNothing() {
  console.log("[function] || navigation.js || returnNothing");
  return;
}

export function closeDialog() {
  console.log("[function] || navigation.js || closeDialog");
  document.querySelector(".save-progress").classList = "save-progress fade-out-modal";
  setTimeout(() => {
    document.querySelector(".save-progress").classList = "save-progress hide fade-out-modal";
  }, 500);
}

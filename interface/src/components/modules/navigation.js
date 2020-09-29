import { FetchData } from "./fetchData.js";

const HTML = {};

function init() {
  // "Global vars"
  HTML.start = document.querySelector("#start");
  HTML.finish = document.querySelector("#finish");
  HTML.reset = document.querySelector(".btn.reset");
  HTML.checkboxeS = document.querySelectorAll(".switch.custom-control-input");
  HTML.unfinishedBox = document.querySelector(".unfinished-container");
  HTML.reason = document.querySelector("#reason");
  HTML.customRadio1 = document.querySelector("#customRadio1");
  HTML.customRadio2 = document.querySelector("#customRadio1");
  HTML.reason_required = document.querySelector(".reason");
  HTML.error = document.querySelector(".error");
  HTML.setDataState = "";
}
function setCount() {
  HTML.tasksChecked = 0;
}

export function start() {
  console.log("[function] || navigation.js || start");
  init();
  setCount();

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
      checkedElementCount++; //counting how many checkboxes are checked
      shouldPut(); //fuction with conditions to see wheather tasks should be PUT or not.
      function shouldPut() {
        console.log(
          "[count] || navigation.js | finish | " + checkedElementCount + " out of " + elementCount + " tasks finished"
        );
        //If amount of checkboxes checked is equal to amount of checkboxes PUT the data
        if (checkedElementCount === elementCount) {
          HTML.unfinishedBox.dataset.state = "hidden";
          FetchData.putTasks(); //PUT tasks
          reset();
          //GET tasks === running=false
        }
        //depending on the data-state of the finish button
        else if (HTML.finish.dataset.state === "hidden firstClick" && HTML.customRadio1.checked) {
          HTML.unfinishedBox.dataset.state = "shown";
          setTimeout(() => {
            HTML.finish.dataset.state = "secondClick";
          }, 500);
        } else if (HTML.finish.dataset.state === "secondClick" && HTML.customRadio1.checked) {
          HTML.finish.dataset.state = "hidden firstClick";
          HTML.error.textContent = "";

          FetchData.putTasks(); //PUT tasks
          //GET tasks === running=false
          reset();
        } else if (
          //if the second option is selected, and the button's data.state is hidden firsktclick and there's content in the textarea
          HTML.finish.dataset.state === "hidden firstClick" &&
          !HTML.customRadio1.checked &&
          HTML.reason.value !== ""
        ) {
          HTML.finish.dataset.state = "hidden firstClick";

          FetchData.putTasks(); //PUT tasks
          HTML.error.textContent = "";
          //GET tasks === running=false
          reset();
        } else {
          //if theres no content in textarea
          HTML.unfinishedBox.dataset.state = "shown";
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

export function saveProgress() {
  console.log("[function] || navigation.js || saveProgress");
  document.querySelector(".save-progress").classList = "save-progress fade-in-modal";
}

export function closeDialog() {
  console.log("[function] || navigation.js || closeDialog");
  document.querySelector(".save-progress").classList = "save-progress fade-out-modal";
  setTimeout(() => {
    document.querySelector(".save-progress").classList = "save-progress hide fade-out-modal";
  }, 200);
}

export function returnNothing() {
  console.log("[function] || navigation.js || returnNothing");
  return;
}

export function setDataState(radio1Selected, callback) {
  console.log("[function] || navigation.js || setDataState");
  const finishButton = document.querySelector("#finish");
  if (radio1Selected === false && finishButton.classList.contains("hide")) {
    document.querySelector("select").disabled = false;
    callback(true);
  } else if (radio1Selected === true) {
    HTML.finish.dataset.state = "secondClick";
  } else if (radio1Selected === false) {
    HTML.finish.dataset.state = "hidden firstClick";
  }
}

export function changeDataState(callback) {
  console.log("[function] || navigation.js || changeDataState");
  callback(HTML.setDataState);
}

export function checkSwitches(callback, e) {
  console.log("[function] || navigation.js || checkSwitches");
  //check if minimum 1 task is marked complete, if yes disable select, if not enable select
  if (e.target.checked) {
    HTML.tasksChecked++;
    document.querySelector(".fire-dialogbox").classList.remove("hide");
    callback("hidden");
  } else {
    HTML.tasksChecked--;
    if (HTML.tasksChecked <= 0) {
      document.querySelector(".fire-dialogbox").classList.add("hide");
      callback("");
    }
  }
}
export function shouldYouSave(e) {
  init();
  console.log("[function] || navigation.js || shouldYouSave");
  if (!HTML.finish.classList.contains("hide") && HTML.finish.disabled === false) {
    saveProgress();
  } else if (e.target.classList.contains("undone")) {
    console.log("go to unfinished tasks"); //set go to unfinished tasks
  } else if (e.target.classList.contains("back")) {
    console.log("go back"); //set go back
  } else if (e.target.classList.contains("message")) {
    console.log("start message"); //set start message
  }
  if (e.target.classList.contains("start")) {
    setTimeout(() => {
      if (HTML.finish.classList.contains("hide")) {
        document.querySelector("select.custom-select").removeAttribute("disabled");
        document.querySelector(".fire-dialogbox").classList.add("hide");
      }
    }, 100);
  }
}

import { FetchData } from "./fetchData.js";
export function start() {
  console.log("start");
  const start = document.querySelector("#start");
  const finish = document.querySelector("#finish");
  const reset = document.querySelector(".btn.btn-outline-light.reset");
  const switches = document.querySelectorAll(".switch.custom-control-input");
  start.classList.add("hide");
  finish.classList.remove("hide");
  finish.disabled = true;
  reset.dataset.state = "shown";
  switches.forEach((checkbox) => {
    checkbox.disabled = false;
    checkbox.addEventListener("click", () => {
      if (checkbox.checked === false) {
        finish.disabled = true;
      }
      switches.forEach((box) => {
        if (box.checked) {
          finish.disabled = false;
        }
      });
    });
  });
}

export function reset() {
  console.log("reset");
  const start = document.querySelector("#start");
  const finish = document.querySelector("#finish");
  const reset = document.querySelector(".btn.btn-outline-light.reset");
  const switches = document.querySelectorAll(".switch.custom-control-input");
  const checks = document.querySelectorAll(".feather-check");
  const unfinishedBox = document.querySelector(".unfinished-container");
  start.classList.remove("hide");
  finish.classList.add("hide");
  reset.dataset.state = "hidden";
  switches.forEach((checkbox) => {
    checkbox.disabled = true;
    checkbox.checked = false;
  });
  checks.forEach((check) => {
    check.classList.add("hide");
  });
  unfinishedBox.dataset.state = "hidden";
}

export function finish() {
  console.log("finish");
  const unfinishedBox = document.querySelector(".unfinished-container");
  const finish = document.querySelector("#finish");
  const switches = document.querySelectorAll(".switch");
  let checkedElementCount = 0;
  let elementCount = 0;
  switches.forEach((el) => {
    //counting how many checkboxes (tasks) exist on this building
    elementCount++;
  });
  switches.forEach((el) => {
    if (el.checked === true) {
      //counting how many checkboxes are checked
      checkedElementCount++;
      shouldPut();
      function shouldPut() {
        //If amount of checkboxes checked is equal to amount of checkboxes PUT the data
        if (checkedElementCount === elementCount) {
          unfinishedBox.dataset.state = "hidden";
          FetchData.putTasks();
          //GET tasks der er running=false
        } else {
          if (finish.dataset.state === "firstClick") {
            finish.dataset.state = "secondClick";
            unfinishedBox.dataset.state = "shown";
          } else {
            finish.dataset.state = "firstClick";
            //HER SKAL DER SENDES TIL DB (PUT)
            FetchData.putTasks();
            //GET tasks der er running=false
            reset();
          }
        }
      }
    }
  });
}

export function unable() {
  console.log("unable");
  document.querySelectorAll(".unfinished input").forEach((el) => {
    el.addEventListener("change", () => {
      document.querySelector("#reason").classList.toggle("hide");
      document.querySelector("#reason").toggleAttribute("required");
    });
  });
}

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
  const unfinishedBox = document.querySelector(".unfinished-container");
  start.classList.remove("hide");
  finish.classList.add("hide");
  reset.dataset.state = "hidden";
  switches.forEach((checkbox) => {
    checkbox.disabled = true;
    checkbox.checked = false;
  });
  unfinishedBox.dataset.state = "hidden";
}

export function finish() {
  console.log("finish");
  const unfinishedBox = document.querySelector(".unfinished-container");
  const finish = document.querySelector("#finish");
  unfinishedBox.dataset.state = "shown";

  if (finish.dataset.state === "firstClick") {
    finish.dataset.state = "secondClick";
    console.log("first");
  } else {
    console.log("second");
    finish.dataset.state = "firstClick";
    //HER SKAL DER SENDES TIL DB (PUT)
    FetchData.putTasks();
    /*     window.location.reload();
    return false; */
  }
}

export function unable() {
  console.log("unable");

  document.querySelectorAll(".unfinished input").forEach((el) => {
    console.log("1");
    el.addEventListener("change", () => {
      console.log("2");
      document.querySelector("#reason").classList.toggle("hide");
      document.querySelector("#reason").toggleAttribute("required");
    });
  });

  console.log(document.querySelector("#customRadio2"));
}

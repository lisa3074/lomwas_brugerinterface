//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json
import { setDate, setDateEn } from "./setDate.js";

window.addEventListener("DOMContentLoaded", init);

//Instead of calling global variables, possibly before the DOM has loaded, we put them in a global object,
//that is called upon, when the DOM content has loaded.
const HTML = {};

function init() {
  console.log("init");

  HTML.url = window.location.href;
  HTML.day = new Date().getDate();
  HTML.month = new Date().getMonth() + 1;
  HTML.year = new Date().getFullYear();
  HTML.regex = /([0-9]{4}-[0-9]{2}-[0-9]{2})/gi;
  HTML.date =
    HTML.year +
    "-" +
    HTML.month.toString().padStart(2, "0") +
    "-" +
    HTML.day.toString().padStart(2, "0");

  if (HTML.regex.test(HTML.url)) {
    HTML.date = HTML.url.match(HTML.regex);
  }

  HTML.api = "https://app.acbacl.com/api/tasks/" + HTML.date;
}

export async function getBuilding(setBuildings, setBuildingsId) {
  console.log("getBuildings");
  let response = await fetch(HTML.api, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();

  const firstBuilding = [];
  if (data.buildings !== null) {
    data.buildings.forEach((building) => {
      firstBuilding.push(building.value);
    });
    setBuildings(data.buildings);
  } else {
    firstBuilding.push("Ingen opgaver i dag");
    setBuildings(data.buildings);
  }
  setBuildingsId(firstBuilding[0]);
}

export async function getTasks(id, setTasks) {
  console.log("getTasks");
  console.log(id);
  let response = await fetch(HTML.api + "?id=" + id, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  setTasks(data.schedules);
  setDate(HTML.date);
  setDateEn(HTML.date);
}

export async function putTasks() {
  console.log("putTasks");
}

export const FetchData = {
  getTasks,
  getBuilding,
  putTasks,
};

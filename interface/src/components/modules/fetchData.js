//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json
import { initDate } from "./setDate.js";

//Instead of calling global variables, possibly before the DOM has loaded, we put them in a global object,
//that is called upon, when the DOM content has loaded.
const HTML = {};

function init() {
  console.log("[function] || fetchData.js || init");

  /* HTML.url = "https://app.acbacl.com/api/tasks/2020-09-14"; */
  HTML.url = window.location.href;
  HTML.day = new Date().getDate();
  HTML.month = new Date().getMonth() + 1;
  HTML.year = new Date().getFullYear();
  HTML.regex = /([0-9]{4}-[0-9]{2}-[0-9]{2})/gi;
  HTML.date = HTML.year + "-" + HTML.month.toString().padStart(2, "0") + "-" + HTML.day.toString().padStart(2, "0");

  //if the url contains a regex match
  if (HTML.regex.test(HTML.url)) {
    //save the date from the url
    HTML.date = HTML.url.match(HTML.regex);
  } //otherwise get todays date

  HTML.api = "https://app.acbacl.com/api/tasks/" + HTML.date;
}

//passing callback functions as parameters
export async function getBuilding(setBuildings, setBuildingsId) {
  console.log("[function] || fetchData.js || getBuildings");
  init();
  let response = await fetch(HTML.api, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();

  const firstBuilding = [];
  //if there is data, push the data.buildings into array and set the state of buildings (in App.js) to
  //this array with the callback function
  if (data.buildings !== null) {
    data.buildings.forEach((building) => {
      firstBuilding.push(building.value);
    });
    setBuildings(data.buildings);
  } else {
    //otherwise push only the one option and set building to that
    firstBuilding.push("Ingen opgaver i dag");
    setBuildings(data.buildings);
  }
  //get the first building in the array and set the state of buildingId in App.js
  setBuildingsId(firstBuilding[0]);
}

//passing an id and a callback function as parameters
export async function getTasks(id, setTasks) {
  console.log("[function] || fetchData.js || getTasks");

  init();
  let response = await fetch(HTML.api + "?id=" + id, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();

  //set tasks and date in App.js and setDate.js
  setTasks(data.schedules);
  initDate(HTML.date);
}

export async function putTasks() {
  console.log("[function] || fetchData.js || putTasks");
  //for when the tasks should be updated
}

//export the functions below
export const FetchData = {
  getTasks,
  getBuilding,
  putTasks,
};

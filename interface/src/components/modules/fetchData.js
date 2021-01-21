//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json
import { initDate } from "./setDate.js";
import { buildings } from "../../bygninger.json";
import { schedules } from "../../schedules.json";

//Instead of calling global variables, possibly before the DOM has loaded, we put them in a global object,
//that is called upon, when the DOM content has loaded.
const HTML = {};

function init() {
  console.log("[function] || fetchData.js || init");
  console.log(buildings);
  console.log(schedules);

  /*  HTML.url = "https://app.acbacl.com/api/tasks/2020-09-21"; */
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

  //HTML.api = "https://app.acbacl.com/api/tasks/" + HTML.date;
  //HTML.api = "https://app.acbacl.com/api/tasks/2020-10-14";
}

//passing callback functions as parameters
export async function getBuilding(setBuildings, setFirstBuildingId, setTaskDate) {
  console.log("[function] || fetchData.js || getBuildings");
  init();
  /* let response = await fetch(buildings);
  let data = await response.json();
  console.log(data); */

  const firstBuilding = [];
  //if there is data, push the data.buildings into array and set the state of buildings (in App.js) to
  //this array with the callback function
  if (buildings !== null) {
    buildings.forEach((building) => {
      firstBuilding.push(building.value);
    });
    setBuildings(buildings);
  } else {
    //otherwise push only the one option and set building to that
    firstBuilding.push("Ingen opgaver i dag");
    setBuildings(buildings);
  }
  //get the first building in the array and set the state of buildingId in App.js
  setFirstBuildingId(firstBuilding[0]);
  setTaskDate("2020-10-15");
}

//passing an id and a callback function as parameters
export async function getTasks(id, setTasks) {
  console.log("[function] || fetchData.js || getTasks");

  init();
  /*   let response = await fetch(schedules, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });

  let data = await response.json(); */
  /*   let theRightTasks;
  schedules.forEach((schedule) => {
    console.log(schedule.id, id);
        if (schedule.id === id) {
      theRightTasks = schedule.id;
    } 
  }); */
  let chosenTasks = [];
  console.log(schedules);
  schedules.forEach((schedule) => {
    if (schedule.building.toString() === id) {
      chosenTasks.push(schedule);
    }
  });
  console.log(chosenTasks);

  //set tasks and date in App.js and setDate.js
  setTasks(chosenTasks);
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

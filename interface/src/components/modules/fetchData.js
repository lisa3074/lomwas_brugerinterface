//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json
import { setDate, setDateEn } from "./setDate.js";

//TODO: Change this constant to window.location.href when implementing the app
const url = "https://app.acbacl.com/api/tasks/2020-09-14/";
//const url = window.location.href;
const day = new Date().getDate();
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();
const regex = /([0-9]{4}-[0-9]{2}-[0-9]{2})/gi;

let date =
  year +
  "-" +
  month.toString().padStart(2, "0") +
  "-" +
  day.toString().padStart(2, "0");

if (regex.test(url)) {
  date = url.match(regex);
}

setDate(date);
setDateEn(date);

const api = "https://app.acbacl.com/api/tasks/" + date;
console.log(date);
export async function getBuilding(setBuildings, setBuildingsId) {
  console.log("getBuildings");
  let response = await fetch(api, {
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
  let response = await fetch(api + "?id=" + id, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  setTasks(data.schedules);
}
export async function putTasks() {
  console.log("putTasks");
}

export const FetchData = {
  getTasks,
  getBuilding,
  putTasks,
};

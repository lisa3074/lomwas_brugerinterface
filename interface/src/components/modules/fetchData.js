const api = "https://frontend-22d4.restdb.io/rest/lomwas";
const apiKey = "5e9581a6436377171a0c234f";
//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json

const url = "https://app.acbacl.com/api/tasks";
const url21 = "https://app.acbacl.com/api/tasks?id=21";

export async function getBuilding(setBuildings) {
  console.log("getTasks");
  let response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  /*   let id;
  console.log(data.buildings);
  setBuildings(data.buildings);
  data.buildings.map((building) => {
    id = building.value;
  });
  console.log(id);
    getTasks(id, setTasks);  */
}

export async function getTasks(id, setTasks) {
  console.log("getTasks");
  console.log(id);
  let response = await fetch(url + "?id=" + id, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();
  console.log(data.schedules);
  setTasks(data.schedules);
}
/* export async function getTasks(callback) {
  console.log("getTasks");
  let response = await fetch(api, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
    },
  });
  let data = await response.json();
  console.log(data);
  callback(data);
} */

export const FetchData = {
  getTasks,
  getBuilding,
};

//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json

const url = "https://app.acbacl.com/api/tasks";

export async function getBuilding(setBuildings, setBuildingsId) {
  console.log("getBuildings");
  let response = await fetch(url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  let data = await response.json();

  const firstBuilding = [];
  data.buildings.filter((building) => {
    const value = building.value;
    firstBuilding.push(value);
    //return only to avoid warning in console
    return value;
  });

  setBuildings(data.buildings);
  setBuildingsId(firstBuilding[0]);
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
  setTasks(data.schedules);
}

export const FetchData = {
  getTasks,
  getBuilding,
};

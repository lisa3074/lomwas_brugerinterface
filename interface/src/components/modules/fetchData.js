const api = "https://frontend-22d4.restdb.io/rest/lomwas";
const apiKey = "5e9581a6436377171a0c234f";
//https://app.acbacl.com/api/tasks?id=345 -> seperat bygning / id == value i json

export async function getTasks(callback) {
  console.log("getTasks");
  let response = await fetch(api, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": apiKey,
    },
  });
  let data = await response.json();
  /*  const sortedData = data.sort((a, b) => a.timeStamp - b.timeStamp); */
  console.log(data);
  callback(data);
}

export const FetchData = {
  getTasks,
};

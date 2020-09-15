export function setDate(date) {
  const moment = require("moment");
  const week = moment(`'${date}'`).isoWeek();

  console.log("date: " + date);
  const dateString = date.toString();
  const newDay = dateString.substring(8, 10);
  const newYear = dateString.substring(0, 4);

  const d = new Date(date);

  let weekday = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag",
  ];

  let month = [
    "januar",
    "februar",
    "marts",
    "april",
    "maj",
    "juni",
    "juli",
    "august",
    "september",
    "oktober",
    "november",
    "december",
  ];
  const m = month[d.getMonth()];
  const w = weekday[d.getDay()];
  const danishDate =
    w + " d. " + newDay + ". " + m + ", " + newYear + " (Uge " + week + ")";

  setTimeout(() => {
    document.querySelector(".dk-date").textContent = danishDate;
  }, 1500);
}

/////ENGELSK DATO SKAL MULIGVIS GØRES DYNAMISK OG MERGES MED OVENSTÅENDE.
export function setDateEn(date) {
  const moment = require("moment");
  const week = moment(`'${date}'`).isoWeek();

  console.log("date: " + date);
  const dateString = date.toString();
  const newDay = dateString.substring(8, 10);
  const newYear = dateString.substring(0, 4);

  const d = new Date(date);

  let weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let theEnd = "th";
  if (newDay === "01") {
    theEnd = "st";
  } else if (newDay === "02") {
    theEnd = "nd";
  } else if (newDay === "03") {
    theEnd = "rd";
  } else {
    theEnd = "th";
  }

  console.log(theEnd);
  const m = month[d.getMonth()];
  const w = weekday[d.getDay()];
  const engDate =
    w +
    " " +
    m +
    " " +
    newDay +
    theEnd +
    ", " +
    newYear +
    " (Week " +
    week +
    ")";

  console.log(engDate);
  setTimeout(() => {
    document.querySelector(".en-date").textContent = engDate;
  }, 500);
}

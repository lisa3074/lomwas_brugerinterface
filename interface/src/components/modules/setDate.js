import dayjs from "dayjs";
const HTML = {};

export function initDate(date) {
  console.log("[function] || setDate.js | initDate | date: " + date);
  HTML.weekOfYear = require("dayjs/plugin/weekOfYear");
  dayjs.extend(HTML.weekOfYear);
  HTML.week = dayjs(`'${date}'`).locale("da").week();
  HTML.dateString = date.toString();
  HTML.newDay = HTML.dateString.substring(8, 10);
  HTML.newYear = HTML.dateString.substring(0, 4);
  HTML.d = new Date(date);
  setDate();
  setDateEn();
}
function setDate() {
  console.log("[function] || setDate.js | setDateEn");
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
  const m = month[HTML.d.getMonth()];
  const w = weekday[HTML.d.getDay()];
  //week (day.js) does not work in firefox, so if firefox browser -> remove week
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    document.querySelector(
      ".dk-date"
    ).textContent = `${w} d. ${HTML.newDay}. ${m}, ${HTML.newYear}`;
  } else {
    document.querySelector(
      ".dk-date"
    ).textContent = `${w} d. ${HTML.newDay}. ${m}, ${HTML.newYear} (Uge ${HTML.week})`;
  }
}

/////ENGELSK DATO SKAL MULIGVIS GØRES DYNAMISK OG MERGES MED OVENSTÅENDE.
function setDateEn() {
  console.log("[function] || setDateEn.js | setDateEn");
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
  if (HTML.newDay === "1" || HTML.newDay === "21" || HTML.newDay === "31") {
    theEnd = "st";
  } else if (HTML.newDay === "2" || HTML.newDay === "22") {
    theEnd = "nd";
  } else if (HTML.newDay === "3" || HTML.newDay === "23") {
    theEnd = "rd";
  } else {
    theEnd = "th";
  }

  const m = month[HTML.d.getMonth()];
  const w = weekday[HTML.d.getDay()];

  //week (day.js) does not work in firefox, so if firefox browser -> remove week
  if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
    document.querySelector(
      ".en-date"
    ).textContent = `${w}, ${m} ${HTML.newDay}${theEnd}, ${HTML.newYear}`;
  } else {
    document.querySelector(
      ".en-date"
    ).textContent = `${w}, ${m} ${HTML.newDay}${theEnd}, ${HTML.newYear} (Uge ${HTML.week})`;
  }
}

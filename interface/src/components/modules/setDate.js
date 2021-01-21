const HTML = {};

export function initDate(date) {
  console.log(date);
  console.log("[function] || setDate.js | initDate | date: " + date);
  HTML.dateString = date.toString();
  HTML.newDay = HTML.dateString.substring(8, 10);
  HTML.newYear = HTML.dateString.substring(0, 4);
  HTML.d = new Date(date);
  HTML.weekNumber = getWeekNumber();
  setTimeout(() => {
    setDate();
    setDateEn();
  }, 100);
}

function getWeekNumber() {
  //set date to fetched date
  let d = HTML.d;
  // Set to nearest Thursday: current date + 4 - current day number
  // Make Sunday's day number 7
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  // Get first day of year
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  // Calculate full weeks to nearest Thursday
  const weekNo = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  // Return array of week number
  return [weekNo];
}

function setDate() {
  console.log("[function] || setDate.js | setDateEn");

  let weekday = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];

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

  document.querySelector(
    ".dk-date"
  ).textContent = `${w} d. ${HTML.newDay}. ${m}, ${HTML.newYear} (Uge ${HTML.weekNumber})`;
}

function setDateEn() {
  console.log("[function] || setDateEn.js | setDateEn");
  let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

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

  document.querySelector(
    ".en-date"
  ).textContent = `${w}, ${m} ${HTML.newDay}${theEnd}, ${HTML.newYear} (Week ${HTML.weekNumber})`;
}

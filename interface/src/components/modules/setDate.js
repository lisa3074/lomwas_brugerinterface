import dayjs from "dayjs";

window.addEventListener("DOMContentLoaded", init);
const HTML = {};

function init() {
  HTML.weekOfYear = require("dayjs/plugin/weekOfYear");
  require("dayjs/locale/da");
  require("dayjs/locale/en");
  dayjs.extend(HTML.weekOfYear);
}

export function setDate(date) {
  console.log("setDate");
  const weekday =
    dayjs(`'${date}'`)
      .locale("da")
      .format("dddd")
      .substring(0, 1)
      .toUpperCase() +
    dayjs(`'${date}'`).locale("da").format("dddd").substring(1).toLowerCase();
  const daynumber = dayjs(`'${date}'`).locale("da").format("D");
  const month = dayjs(`'${date}'`).locale("da").format("MMMM");
  const year = dayjs(`'${date}'`).locale("da").format("YYYY");
  const week = dayjs(`'${date}'`).locale("da").week();
  document.querySelector(".dk-date").textContent = `
    ${weekday} d. ${daynumber}. ${month}, ${year} (uge ${week})`;
}

export function setDateEn(date) {
  console.log("setDateEn");
  const weekday = dayjs(`'${date}'`).locale("en").format("dddd");
  const daynumber = dayjs(`'${date}'`).locale("den").format("D");
  const month = dayjs(`'${date}'`).locale("en").format("MMMM");
  const year = dayjs(`'${date}'`).locale("en").format("YYYY");
  const week = dayjs(`'${date}'`).locale("en").week();

  let theEnd = "th";
  if (daynumber === "1" || daynumber === "21" || daynumber === "31") {
    theEnd = "st";
  } else if (daynumber === "2" || daynumber === "22") {
    theEnd = "nd";
  } else if (daynumber === "3" || daynumber === "23") {
    theEnd = "rd";
  } else {
    theEnd = "th";
  }

  document.querySelector(
    ".en-date"
  ).textContent = `${weekday}, ${month} ${daynumber}${theEnd}, ${year} (week ${week})`;
}

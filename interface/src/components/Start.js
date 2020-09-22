import React from "react";
import { start, finish, unable } from "./modules/navigation.js";

export default function Start({ buildings }) {
  const svgSettings = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  return (
    <>
      <button
        //disable start if there are no tasks
        disabled={buildings.length <= 1 ? true : false}
        id="start"
        className="btn btn-success start"
        onClick={() => start()}>
        <svg {...svgSettings} className="feather feather-clock wd-10 mg-r-5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Start
      </button>
      <button
        id="finish"
        className="btn btn-success start hide"
        data-state="firstClick"
        onClick={() => {
          finish();
          unable();
        }}>
        <svg {...svgSettings} className="feather feather-check-circle wd-10 mg-r-5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        Afslut
      </button>
    </>
  );
}

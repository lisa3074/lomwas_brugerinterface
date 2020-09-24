import React from "react";
import { finish, start, setDataState } from "./modules/navigation.js";

export default function Start({
  buildings, //building's array
  shouldSelectBeDisabled, //function that decides if select should be disabled or not
  isDataStateHidden, //function that checks if the finish buttons data state is "hidden"
  getDataState, //function that is passed from Nav.js to set state for radio1 vwith callback (in Nav.js)
  setRadio1, //Updating function for the radio1 state
  radio1, //state variable
}) {
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
        disabled={buildings.length <= 1 ? true : false} //disable start if there are no tasks
        id="start"
        className="btn btn-success start"
        onClick={() => {
          start(); // function in fetchData.js
          shouldSelectBeDisabled(""); //sets the state of the variable disableIt (in Nav.js)
          getDataState(); //Set if select should be disabled (navigation.js)
        }}>
        <svg {...svgSettings} className="feather feather-clock wd-10 mg-r-5">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        Start
      </button>
      <button
        id="finish"
        className="btn btn-success start hide"
        data-state="disabled"
        onClick={(e) => {
          isDataStateHidden(e); //function that checks if the finish buttons data state is "hidden"
          finish(); // function in fetchData.js
          setDataState(radio1, setRadio1); //callback function that sets the state of radio1 = true (reset of state in navigation.js)
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

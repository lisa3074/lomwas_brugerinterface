import React from "react";
import "../sass/nav.scss";

export default function Nav(props) {
  //Basic svg/icon settings converted to an object
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

  //Empty array for the buildings that are being fetched from the API
  const buildingArray = [];

  //mapping through the buildings, to create an array of each building with different properties
  //inside an option tag
  props.buildings.map((building) => {
    const buildingOption = (
      <option key={building.value} value={building.value}>
        {building.text}
      </option>
    );
    //push the buildings/tags into array
    buildingArray.push(buildingOption);
    //return to avoid warning in console
    return buildingOption;
  });

  return (
    <nav id="Nav">
      <div className="top-buttons">
        <button type="button" className="btn btn-primary undone">
          <svg
            //object with svg settings
            {...svgSettings}
            className="feather feather-alert-circle wd-10 mg-r-5">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12" y2="16"></line>
          </svg>
          UAFSLUTTEDE OPGAVER
        </button>
        <button className="btn btn-outline-light back">
          <svg {...svgSettings} className="feather feather-chevron-left">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
      </div>

      <div className="nav-container section-bg">
        <p>
          Bygninger<span> *</span>
        </p>
        <select
          className="custom-select"
          //Calling the passed down function from App.js and sending along the options target value, whis is equal
          //to the oprions key, which is equal to the buildings id
          onChange={(e) => {
            /*  updateBuilding(e.target.value); */
            props.updateBuildingId(e.target.value);
          }}>
          {buildingArray}
        </select>
        <div className="btn-container">
          <div className="btn-wrapper">
            <button className="btn btn-success start">
              <svg
                {...svgSettings}
                className="feather feather-clock wd-10 mg-r-5">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              Start
            </button>
            <button className="btn btn-outline-light reset">
              <svg
                {...svgSettings}
                className="feather feather-x-circle wd-10 mg-r-5">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
              Nulstil
            </button>
          </div>
          <button className="btn btn-outline-light message">
            <svg {...svgSettings} className="feather feather-mail wd-10 mg-r-5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Besked
          </button>
        </div>
      </div>
    </nav>
  );
}

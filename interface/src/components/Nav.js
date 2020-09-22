import React, { useEffect, useState } from "react";
import "../sass/nav.scss";
import Start from "./Start";
import Reset from "./Reset";
import { reset, unable } from "./modules/navigation.js";

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
  //state
  const [buildings, setBuildings] = useState([]);

  //UseEffect to make sure the array is only updated when the dependency (props.buildings) is changed (to avoid endless loop)
  useEffect(() => {
    //Empty array for the buildings that are being fetched from the API
    const buildingArray = [];
    if (props.buildings !== null) {
      props.buildings.forEach((building) => {
        const buildingOption = (
          <option key={building.value} value={building.value}>
            {building.text}
          </option>
        );
        //push the buildings/tags into array
        buildingArray.push(buildingOption);
        setBuildings(buildingArray);
      });
    } else {
      //if there are no buildings/tasks
      const buildingOption = <option key={"1"}>ingen opgaver i dag</option>;
      buildingArray.push(buildingOption);
      setBuildings(buildingArray);
    }
  }, [props.buildings]);

  function resetText() {
    document.querySelector(".error").textContent = "";
  }

  return (
    <nav id="Nav">
      <div className="top-buttons">
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
          //Calling the passed down function from App.js and sending along the options target value, which is equal
          //to the options key, which is equal to the buildings id
          onChange={(e) => {
            props.updateBuildingId(e.target.value);
            reset();
          }}>
          {buildings}
        </select>
        <div className="btn-container">
          <Start buildings={buildings}></Start>
          <Reset></Reset>

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
          <button className="btn btn-outline-light message">
            <svg {...svgSettings} className="feather feather-mail wd-10 mg-r-5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Besked
          </button>
        </div>
        <article className="unfinished-container" data-state="hidden">
          <p className="inforbox">Der er uafsluttede opgaver, hvordan skal disse afsluttes?</p>
          <fieldset className="unfinished">
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="custom-control-input"
                defaultChecked
              />
              <label className="custom-control-label" htmlFor="customRadio1">
                Afsluttes på et senere tidspunkt
              </label>
            </div>

            <div className="custom-control custom-radio">
              <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
              <label className="custom-control-label" htmlFor="customRadio2">
                Kan ikke udføres
              </label>
            </div>

            <label htmlFor="reason" className="reason hide">
              Skal udfyldes <span className="required"> *</span>
              <span className="error"></span>
            </label>
            <textarea
              id="reason"
              className="form-control hide"
              rows="2"
              placeholder="Skriv begrundelse"
              onKeyUp={resetText}></textarea>
          </fieldset>
        </article>
      </div>
    </nav>
  );
}

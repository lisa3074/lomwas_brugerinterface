import React, { useEffect, useState } from "react";
import "../sass/nav.scss";
import Start from "./Start";
import Reset from "./Reset";
import {
  reset,
  saveProgress,
  returnNothing,
  finish,
  unable,
  setDataState,
  changeDataState,
  shouldYouSave,
} from "./modules/navigation.js";
import SaveProgress from "./SaveProgress";
import UnfinishedTasks from "./UnfinishedTasks.js";

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
  const [radio1, setRadio1] = useState([true]);

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
      const buildingOption = <option key={"1"}>Der er ingen uafsluttede opgaver i dag</option>;
      buildingArray.push(buildingOption);
      setBuildings(buildingArray);
    }
  }, [props.buildings]);

  //Call setDataState whenever radio1 is changed to update variable
  useEffect(() => {
    setDataState(radio1);
  }, [radio1]);

  //reset error text for textarea on keyup
  function resetText() {
    document.querySelector(".error").textContent = "";
  }

  //set if select should be disabled (React component)
  function shouldSelectBeDisabled(startState) {
    console.log("[function] || isStartHidden | function passed to Start.js and called from there");
    props.setDisableIt(startState);
  }

  //Set if select should be disabled (javaScript module)
  function getDataState() {
    changeDataState(props.setDisableIt);
  }

  //check if the first 6 characters of data state on finish button is "hidden". Send whatever is found to shouldSelectBeDisabled
  //if "hidden", select will be disabled if anything else, select wont be disabled.
  function isDataStateHidden(e) {
    console.log("[function] || Start.js | isDataStateHidden");
    const isButtonHidden = e.target.dataset.state.substring(0, 6);
    shouldSelectBeDisabled(isButtonHidden);
    finish();
    unable();
  }

  const zindex = {
    zIndex: props.disableIt === "hidden" ? "100" : "-20",
    cursor: "pointer",
  };

  return (
    <>
      <nav id="Nav">
        <div className="top-buttons">
          <button
            className="btn btn-outline-light back"
            onClick={(e) => {
              shouldYouSave(e);
            }}>
            <svg {...svgSettings} className="feather feather-chevron-left">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        </div>

        <div className="nav-container section-bg">
          <p>
            Bygninger<span> *</span>
          </p>
          <div
            className="fire-dialogbox"
            style={zindex}
            //make select clickable, when disabled so that dialog box pops up
            onClick={() => {
              props.disableIt === "hidden" ? saveProgress() : returnNothing();
            }}>
            {" "}
          </div>
          <select
            className="custom-select"
            //Calling the passed down function from App.js and sending along the options target value, which is equal
            //to the options key, which is equal to the buildings id
            onChange={(e) => {
              props.updateBuildingId(e.target.value);
              reset();
            }}
            disabled={props.disableIt === "hidden" ? true : false}>
            {buildings}
          </select>

          <div className="btn-container">
            {/*   Start and finish button conponent */}
            <Start
              buildings={buildings}
              shouldSelectBeDisabled={shouldSelectBeDisabled}
              isDataStateHidden={isDataStateHidden}
              getDataState={getDataState}
              setRadio1={setRadio1}
              radio1={radio1}></Start>
            {/*   Reset button conponent */}
            <Reset shouldSelectBeDisabled={shouldSelectBeDisabled}></Reset>

            <button
              type="button"
              className="btn btn-secondary undone"
              onClick={(e) => {
                shouldYouSave(e);
              }}>
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
            <button
              className="btn btn-outline-light message"
              onClick={(e) => {
                shouldYouSave(e);
              }}>
              <svg {...svgSettings} className="feather feather-mail wd-10 mg-r-5">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Besked
            </button>
          </div>
          <article className="unfinished-container" data-state="hidden">
            <div>
              <p className="infobox">Der er uafsluttede opgaver:</p>
              <UnfinishedTasks unfinishedTasks={props.unfinishedTasks}></UnfinishedTasks>
            </div>
            <div>
              <p className="infobox">Hvordan skal disse afsluttes?</p>
              <fieldset className="unfinished">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio1"
                    name="customRadio"
                    className="custom-control-input"
                    onClick={(e) => {
                      //updater function to change state on radio1 variable to true
                      setRadio1(true);
                    }}
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="customRadio1">
                    Afsluttes på et senere tidspunkt
                  </label>
                </div>

                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="customRadio2"
                    name="customRadio"
                    className="custom-control-input"
                    onClick={() => {
                      //updater function to change state on radio1 variable to false
                      setRadio1(false);
                    }}
                  />
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
            </div>
          </article>
        </div>
      </nav>
      <section className="save-progress hide fade-out">
        {/* dialog box to save progress */}
        <SaveProgress
          shouldSelectBeDisabled={shouldSelectBeDisabled}
          isDataStateHidden={isDataStateHidden}
          setDataState={setDataState}
          setRadio1={setRadio1}
          radio1={radio1}></SaveProgress>
      </section>
    </>
  );
}

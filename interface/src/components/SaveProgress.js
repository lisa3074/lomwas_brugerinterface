import React from "react";
import isDoneHidden from "./Start.js";
import isStartHidden from "./Start.js";
import { closeDialog, reset } from "./modules/navigation.js";
import "../../src/sass/saveProgress.scss";

export default function SaveProgress() {
  console.log("DoneButton");
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
    <div>
      <div className="modal" id="modal2" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content tx-14">
            <div className="modal-header">
              <h6 className="modal-title" id="exampleModalLabel2">
                Vælg hvad der skal gøres ved dine ændringer
              </h6>
              <button type="button" className="close" onClick={closeDialog}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="mg-b-0">
                Vælg om du vil afslutte og gemme dine ændringer eller nulstille inden du vælger en ny bygning.
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary tx-13">
                <svg {...svgSettings} className="feather feather-x closed">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                Luk
              </button>
              <button
                className="btn btn-outline-light reset"
                data-state="hidden"
                onClick={() => {
                  reset();
                  isStartHidden("");
                }}>
                <svg {...svgSettings} className="feather feather-x-circle wd-10 mg-r-5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                Nulstil
              </button>
              <button
                id="finish"
                className="btn btn-success start"
                data-state="disabled"
                onClick={(e) => {
                  isDoneHidden(e);
                }}>
                <svg {...svgSettings} className="feather feather-check-circle wd-10 mg-r-5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Afslut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

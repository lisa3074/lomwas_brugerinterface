import React from "react";

export default function Nav() {
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
  return (
    <nav>
      <div className="top-buttons">
        <button type="button" className="btn btn-primary undone">
          <svg
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
        <select className="custom-select">
          <option defaultValue>Option 1</option>
          <option value="1">Option 2</option>
          <option value="2">Option 3</option>
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

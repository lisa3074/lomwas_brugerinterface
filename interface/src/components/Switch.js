import React from "react";
import "../sass/switch.scss";
import { closeExpand } from "./modules/closeExpand";
import { setDataState, switchOn, returnNothing, checkSwitches } from "./modules/navigation.js";

export default function Switch(props) {
  function resetFinishedButton() {
    document.querySelector("#finish").dataset.state = "hidden firstClick";
  }

  return (
    <>
      <fieldset className={"Switch hide a" + props.id} onClick={resetFinishedButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b759"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check hide"
          data-id={props.id}>
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div className={"custom-control custom-switch"}>
          <input
            type="checkbox"
            className={"switch custom-control-input a" + props.id}
            id={"customSwitch1" + props.id}
            value={props.id}
            onChange={(e) => {
              console.log(e.target);
              checkSwitches(props.setStartState, e);
            }}
            disabled
          />
          <label className="custom-control-label" htmlFor={"customSwitch1" + props.id}>
            AFSLUTTET
          </label>
        </div>
      </fieldset>
      <div className="fill-media" onClick={() => closeExpand(props.id)}></div>
    </>
  );
}

import React from "react";
import "../sass/switch.scss";
import { closeExpand } from "./modules/closeExpand";

export default function Switch(props) {
  /*   const thisSwitch = document.querySelector(".a" + props.id + " > input");
  const [checked, setIsChecked] = useState(false);
  const isCheckChanged = () => {
    if (checked === true) {
      console.log("false");
      setIsChecked(false);
    } else {
      console.log("true");
      setIsChecked(true);
    }
  }; */

  return (
    <>
      <fieldset className={"Switch hide a" + props.id}>
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
            disabled
            /*  onClick={isCheckChanged} */
          />
          <label
            className="custom-control-label"
            htmlFor={"customSwitch1" + props.id}>
            AFSLUTTET
          </label>
        </div>
      </fieldset>
      <div className="fill-media" onClick={() => closeExpand(props.id)}></div>
    </>
  );
}

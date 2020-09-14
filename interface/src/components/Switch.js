import React from "react";
import "../sass/switch.scss";

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
    <fieldset className={"Switch a" + props.id}>
      <div className={"custom-control custom-switch"}>
        <input
          type="checkbox"
          className={"switch custom-control-input a" + props.id}
          id={"customSwitch1" + props.id}
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
  );
}

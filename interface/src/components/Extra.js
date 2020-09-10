import React from "react";
import "../sass/extra.scss";
import { toggleMedia } from "./modules/toggleMedia.js";
export default function Extra() {
  /*   const [checked, setChecked] = useState(true);
  const checkChanged = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  }; */

  function media() {
    console.log("media");
    toggleMedia();
  }
  return (
    <fieldset className="extra">
      <p className="label"> EXTRA</p>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input ekstra-switch"
          id="customSwitch1"
          onClick={media}
          defaultChecked
        />
        <label className="custom-control-label" htmlFor="customSwitch1"></label>
      </div>
    </fieldset>
  );
}

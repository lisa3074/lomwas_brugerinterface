import React, { useState } from "react";
export default function Extra() {
  const [checked, setChecked] = useState(true);
  const checkChanged = () => {
    if (checked === true) {
      setChecked(false);
    } else {
      setChecked(true);
    }
  };
  return (
    <fieldset className="extra">
      <p className="label"> EXTRA</p>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          onClick={checkChanged}
          defaultChecked
        />
        <label className="custom-control-label" htmlFor="customSwitch1"></label>
      </div>
    </fieldset>
  );
}

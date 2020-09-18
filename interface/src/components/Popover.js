import React from "react";
import "../../src/sass/popover.scss";

export default function Popover(props) {
  console.log("Popover");

  return (
    <div className={"Popover section-bg hide a" + props.id}>
      <ul>
        {props.drawer}
        <div className="triangle-wrapper">
          <div className="outer-triangle"></div>
          <div className="inner-triangle"></div>
        </div>
      </ul>
    </div>
  );
}

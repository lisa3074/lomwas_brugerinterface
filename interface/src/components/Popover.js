import React from "react";
import "../../src/sass/popover.scss";

export default function Popover(props) {
  console.log("Popover");
  console.log(props.drawer);

  return (
    <div className={"Popover section-bg hide a" + props.id}>
      <ul>{props.drawer}</ul>
      <div className="outer-triangle"></div>
      <div className="inner-triangle"></div>
    </div>
  );
}

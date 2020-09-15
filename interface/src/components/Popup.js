import React from "react";
import "../sass/popup.scss";
import { close } from "./modules/popup.js";

export default function Popup(props) {
  return (
    <div className="Popup hide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-x close-it"
        onClick={close}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      {/* If the elementKey i not nothing then only show the array entry with the same index as the elementKey, if not, show the whole array */}
      <ul className={props.type}>
        {props.elementKey !== ""
          ? props.newDrawer[props.elementKey]
          : props.newDrawer}
      </ul>
    </div>
  );
}

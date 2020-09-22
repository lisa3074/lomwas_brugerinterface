import React, { useState } from "react";
import "../sass/popup.scss";
import { close } from "./modules/popup.js";

export default function Popup(props) {
  //vars
  const imageAmount = props.newDrawer.length - 1;
  const svgSettings = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  //states
  let [i, setI] = useState(0);
  let [innerWidth, setInnerWidth] = useState(window.innerWidth);

  window.addEventListener("resize", resizeHandler);
  function resizeHandler() {
    setInnerWidth(window.innerWidth);
  }

  //skip between images
  function skipRight() {
    setI(i + 1);
    if (i >= imageAmount) {
      setI(0);
    }
  }
  function skipLeft() {
    setI(i + -1);
    if (i <= 0) {
      setI(imageAmount);
    }
  }

  return (
    <div className="Popup hide" onClick={(e) => close(e.target)}>
      <svg {...svgSettings} className="feather feather-x close-it" onClick={(e) => close(e.target)}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      {/* If the elementKey is not nothing then only show the array entry with the same index as the elementKey, 
      if not, show the whole array */}
      <ul className={props.type}>
        {innerWidth < 767 && props.elementKey !== "" ? (
          props.newDrawer[props.elementKey]
        ) : innerWidth < 767 && props.elementKey === "" ? (
          props.newDrawer
        ) : innerWidth < 767 && props.elementKey !== "" ? (
          props.newDrawer[i]
        ) : /* If the elementKey is not nothing then only show the array entry with the same index as the elementKey, 
        if not, show the first image in the array and set up clickable arrows to loop throght the images */
        innerWidth > 767 && props.elementKey !== "" ? (
          props.newDrawer[props.elementKey]
        ) : innerWidth > 767 && props.elementKey === "" ? (
          <>
            {props.newDrawer[i]}
            <div className="svg-wrapper">
              <svg
                {...svgSettings}
                strokeWidth="1"
                className="feather feather-chevrons-left"
                onClick={() => skipLeft()}>
                <polyline points="11 17 6 12 11 7"></polyline>
              </svg>
              <svg
                {...svgSettings}
                strokeWidth="1"
                className="feather feather-chevrons-right"
                onClick={() => skipRight()}>
                <polyline points="13 17 18 12 13 7"></polyline>
              </svg>
            </div>
            <p>
              {i + 1} ud af {imageAmount + 1}
            </p>
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

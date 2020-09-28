import React, { useState } from "react";
import "../sass/popup.scss";
import { close } from "./modules/popup.js";
import Image from "./Image.js";
import DocsAndVideos from "./DocsAndVideos.js";

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
    <div
      className="Popup hide"
      onClick={(e) => {
        close(e.target, setI);
      }}>
      <svg
        {...svgSettings}
        className="feather feather-x close-it"
        onClick={(e) => {
          close(e.target, setI);
        }}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      {/* If the elementKey is not nothing then only show the array entry with the same index as the elementKey, 
      if not, show the whole array */}
      <ul className={props.type}>
        {innerWidth < 767 && props.elementKey !== "" ? (
          <DocsAndVideos newDrawer={props.newDrawer} elementKey={props.elementKey} type={props.type}></DocsAndVideos>
        ) : innerWidth < 767 && props.elementKey === "" ? (
          <Image
            newDrawer={props.newDrawer}
            innerWidth={innerWidth}
            type={
              props.type
            }></Image> /*  innerWidth < 767 && props.elementKey !== "" ? (
          props.newDrawer[i]
        ) : */
        ) : /* If the elementKey is not nothing then only show the array entry with the same index as the elementKey, 
        if not, show the first image in the array and set up clickable arrows to loop throght the images */
        innerWidth > 767 && props.elementKey !== "" ? (
          <DocsAndVideos newDrawer={props.newDrawer} elementKey={props.elementKey} type={props.type}></DocsAndVideos>
        ) : innerWidth > 767 && props.elementKey === "" ? (
          <Image
            newDrawer={props.newDrawer}
            i={i}
            skipLeft={skipLeft}
            skipRight={skipRight}
            imageAmount={imageAmount}></Image>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

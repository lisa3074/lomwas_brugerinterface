import React from "react";

export default function Image(props) {
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

  const items = props.newDrawer.map((item) => (
    <figure key={item.id} className="image-wrapper">
      <img className="loadedImage" src={require("../images/" + props.i + ".jpg")} />
      <figcaption className="figcaption-image"> {props.newDrawer[props.i]}</figcaption>
    </figure>
  ));
  return (
    <>
      {props.innerWidth < 767 ? (
        items
      ) : (
        <>
          {props.newDrawer[props.i]}
          <img className="loadedImage" src={require("../images/" + props.i + ".jpg")} />

          <div className="svg-wrapper">
            <svg
              {...svgSettings}
              strokeWidth="1"
              className="feather feather-chevrons-left"
              onClick={() => props.skipLeft()}>
              <polyline points="11 17 6 12 11 7"></polyline>
            </svg>
            <svg
              {...svgSettings}
              strokeWidth="1"
              className="feather feather-chevrons-right"
              onClick={() => props.skipRight()}>
              <polyline points="13 17 18 12 13 7"></polyline>
            </svg>
          </div>
          <p>
            {props.i + 1} ud af {props.imageAmount + 1}
          </p>
        </>
      )}
    </>
  );
}

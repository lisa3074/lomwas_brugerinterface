import React, { useState, useEffect } from "react";
import "../sass/media.scss";
import { popup } from "./modules/popup.js";
import { popover } from "./modules/popover.js";
import Popover from "./Popover";

export default function Media(props) {
  const svgSettings = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  //State
  const [drawer, setDrawer] = useState([]);
  const [type, setType] = useState([]);

  //Call the passed down function getMedia only when dependency [drawer] change.
  useEffect(() => {
    props.getMedia(drawer, type);
  }, [drawer]);

  function popoverContent(e) {
    let count = -1;
    //.map loops through the array and creates a new array with modifications (in this case adds a html tag and properties for each entry)
    const items = props.tasks.map((item) => (
      <li
        key={item.id}
        //data-index correlates to the index position in the array, if image -> no data-index
        data-index={e === "image" ? "" : (count += 1)}
        //if image -> imediately call getMediaElement with nothing as parameter otherwise use data-index of element clicked
        onClick={
          e === "image"
            ? props.getMediaElement("")
            : (e) => {
                popup();
                //call the passed down function getMediaElement and pass the data-index of the clicked element
                props.getMediaElement(e.target.getAttribute("data-index"));
              }
        }>
        {/* test input */}
        {e === "video"
          ? item.local.name + " AND " + item.id
          : e === "docs"
          ? item.local.type.name + " AND " + item.id
          : item.local.type.name + " AND " + item.id}
      </li>
    ));

    //updater funktion for drawer and type
    setDrawer(items);
    setType(e);
  }

  return (
    <div className="Media hide">
      <svg
        {...svgSettings}
        className={"feather feather-film a" + props.id}
        onClick={(e) => {
          popover(props.id, "video", "feather-film", "docs");
          popoverContent("video");
        }}>
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
        <line x1="7" y1="2" x2="7" y2="22"></line>
        <line x1="17" y1="2" x2="17" y2="22"></line>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <line x1="2" y1="7" x2="7" y2="7"></line>
        <line x1="2" y1="17" x2="7" y2="17"></line>
        <line x1="17" y1="17" x2="22" y2="17"></line>
        <line x1="17" y1="7" x2="22" y2="7"></line>
      </svg>
      <svg
        {...svgSettings}
        className={"feather feather-image a" + props.id}
        onClick={(e) => popoverContent("image") + popup(e.target)}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
      <svg
        {...svgSettings}
        className={"feather feather-file a" + props.id}
        onClick={(e) => {
          popover(props.id, "docs", "feather-file", "video");
          popoverContent("docs");
        }}>
        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
        <polyline points="13 2 13 9 20 9"></polyline>
      </svg>

      <Popover task={props.task} drawer={drawer} id={props.id}></Popover>
    </div>
  );
}

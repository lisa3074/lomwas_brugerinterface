import React, { useState } from "react";
import Popup from "./Popup";
import Extra from "./Extra";
import Etage from "./Etage";
import "../sass/main.scss";

export default function Main(props) {
  console.log(
    "[function] || Main.js | Main() | number of tasks: " + props.tasks.length
  );
  const floors = [];

  //States
  const [newDrawer, setNewDrawer] = useState([]);
  const [elementKey, setElementKey] = useState([]);
  const [type, setType] = useState([]);

  //for each floor that exists in the tasks up to 50, take that floor and filter all tasks of that floor and display it
  //.filter loops through the array and creates a new one with only the entries that pass the test (in this case ===i)
  const tasks = props.tasks.filter((t) => t.running === false);

  for (let i = 0; i < 50; i++) {
    if (tasks.filter((t) => t.local.floor === i).length) {
      const floor = (
        <Etage
          tasks={props.tasks.filter((t) => t.local.floor === i)}
          floor={"0" + i}
          key={i}
          getMedia={getMedia}
          getMediaElement={getMediaElement}></Etage>
      );
      floors.push(floor);
    }
  }

  function hideUnfinishedBox() {
    console.log("[function] || Main.js | hideUnfinishedBox()");
    document.querySelector(".unfinished-container").dataset.state = "hidden";
  }

  //Sets newDrawer array (is called from Media.js and drawer is the array of images)
  function getMedia(drawer, type) {
    console.log("[function] || Main.js | getMedia()");
    setNewDrawer(drawer);
    setType(type);
  }

  //Sets elementKey array (is called from Popover.js and elementKey is the property data-index of the element clicked (whitch
  //corresponds with the same elements index in the array)
  function getMediaElement(elementKey) {
    console.log("[function] || Main.js | getMediaElement()");
    setElementKey(elementKey);
  }

  return (
    <main className="Main section-bg" onClick={hideUnfinishedBox}>
      <Extra></Extra>
      <ul>{floors}</ul>
      <Popup
        floors={floors}
        tasks={props.tasks}
        newDrawer={newDrawer}
        elementKey={elementKey}
        type={type}></Popup>
    </main>
  );
}

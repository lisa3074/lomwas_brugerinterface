import React, { useState } from "react";
import Popup from "./Popup";
import Extra from "./Extra";
import Etage from "./Etage";
import "../sass/main.scss";

export default function Main(props) {
  console.log("number of tasks in all: " + props.tasks.length);
  const floors = [];

  //for each floor that exists in the tasks up to 50, take that floor and filter all tasks of that floor and display it
  //.filter loops through the array and creates a new one with only the entries that pass the test (in this case ===i)
  for (let i = 0; i < 50; i++) {
    if (props.tasks.filter((t) => t.local.floor === i).length) {
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

  const [newDrawer, setNewDrawer] = useState([]);
  const [elementKey, setElementKey] = useState([]);

  function getMedia(drawer) {
    setNewDrawer(drawer);
  }

  function getMediaElement(elementKey) {
    console.log("getMediaElement");
    setElementKey(elementKey);
  }
  console.log(elementKey);

  console.log(newDrawer);

  return (
    <main className="Main section-bg">
      <Extra></Extra>
      <ul>{floors}</ul>
      <Popup
        floors={floors}
        tasks={props.tasks}
        newDrawer={newDrawer}
        elementKey={elementKey}></Popup>
    </main>
  );
}

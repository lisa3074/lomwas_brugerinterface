import React, { useState } from "react";
import Popup from "./Popup";
import Extra from "./Extra";
import Etage from "./Etage";
import "../sass/main.scss";

//props: tasks
export default function Main(props) {
  console.log("number of tasks in all: " + props.tasks.length);
  const floors = [];

  //for each floor that exists in the tasks up to 50, take that floor and filter all tasks of that floor and display it
  for (let i = 0; i < 50; i++) {
    if (props.tasks.filter((t) => t.local.floor === i).length) {
      const floor = (
        <Etage
          tasks={props.tasks.filter((t) => t.local.floor === i)}
          floor={"0" + i}
          key={i}
          getMedia={getMedia}></Etage>
      );

      floors.push(floor);
    }
  }

  const [taskId, setId] = useState([]);

  function getMedia(taskId) {
    console.log("getMedia: " + taskId);
    setId(taskId);
    console.log("getMedia: " + taskId);
  }

  return (
    <main className="Main section-bg">
      <Extra></Extra>
      <ul>{floors}</ul>
      <Popup floors={floors} tasks={props.tasks} taskId={taskId}></Popup>
    </main>
  );
}

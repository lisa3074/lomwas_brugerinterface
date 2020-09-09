import React from "react";
import Popup from "./Popup";
import Task from "./Task";
import Extra from "./Extra";
import Etage from "./Etage";
import "../sass/main.scss";

//props: tasks
export default function Main({ tasks }) {
  console.log("number of tasks in all: " + tasks.length);
  const floors = [];

  //for each floor that exists in the tasks up to 50, take that floor and filter all tasks of that floor and display it
  for (let i = 0; i < 50; i++) {
    if (tasks.filter((t) => t.floor === i).length) {
      const floor = (
        <Etage
          tasks={tasks.filter((t) => t.floor === i)}
          floor={"0" + i}
          key={i}></Etage>
      );
      floors.push(floor);
      console.log(floors);
    }
  }

  return (
    <main className="Main section-bg">
      <Extra></Extra>
      <ul>{floors}</ul>
      <Popup></Popup>
    </main>
  );
}

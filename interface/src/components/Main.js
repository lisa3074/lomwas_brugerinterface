import React from "react";
import Popup from "./Popup";
import Task from "./Task";
import Extra from "./Extra";
import Etage from "./Etage";
import "../sass/main.scss";

//props: tasks
export default function Main({ tasks }) {
  //PROBLEM MED AT HIDE ETAGE ! (HVOR DER INGEN TASKS ER)
  const visible = {
    display: tasks.length <= 0 ? "none" : "block",
  };
  console.log(tasks.length);
  console.log(visible);
  const found = Object.entries(tasks);
  console.log(found);
  return (
    <main className="Main section-bg">
      <Extra></Extra>
      <Etage tasks={tasks.filter((t) => t.floor === 0)} floor={"00"}></Etage>
      <Etage
        tasks={tasks.filter((t) => t.floor === 1)}
        floor={"01"}
        style={visible}></Etage>
      <Etage tasks={tasks.filter((t) => t.floor === 2)} floor={"02"}></Etage>
      <Etage tasks={tasks.filter((t) => t.floor === 3)} floor={"03"}></Etage>
      <Popup></Popup>
    </main>
  );
}

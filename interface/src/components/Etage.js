import React from "react";
import Task from "./Task";

export default function Etage(props) {
  console.log(props.tasks);
  console.log(props.floor);

  const mappedTasks = props.tasks.map((task) => (
    <Task key={task._id} {...task} floor={props.floor} />
  ));

  return (
    <div className="level-wrapper">
      <span className="level">ETAGE</span>
      <span className="level-no">{props.floor}</span>
      <div className="task-list">
        <ul>{mappedTasks}</ul>
      </div>
    </div>
  );
}

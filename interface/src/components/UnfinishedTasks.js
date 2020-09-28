import React from "react";

export default function UnfinishedTasks(props) {
  console.log(props.unfinishedTasks);
  const undone = props.unfinishedTasks.map((task) => (
    <li key={task.scheduleID}>
      Etage: {task.local.floor}, Lokale {task.local.id} ({task.local.name})
    </li>
  ));

  return <ul>{undone}</ul>;
}

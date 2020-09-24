import React from "react";
import Task from "./Task";

export default function Etage(props) {
  console.log("[function] || Etage.js | Etage | etage: " + props.floor);
  //.map loops through the array and creates a new array from that array with modifications (in this case adds a html tag and properties for each entry)
  const mappedTasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      {...task}
      task={task}
      floor={props.floor}
      getMedia={props.getMedia}
      getMediaElement={props.getMediaElement}
      setStartState={props.setStartState}
      //This one below needs reevaluation, when pictures and videos is made available in the json file
      //is only used for loop in popovers (for testing) I'm not sure ir should be removed though
      tasks={props.tasks}
    />
  ));

  return (
    <div className="level-wrapper">
      <div>
        <span className="level">ETAGE</span>
        <span className="level-no">{props.floor}</span>
      </div>
      <div className="task-list">
        <ul>{mappedTasks}</ul>
      </div>
    </div>
  );
}

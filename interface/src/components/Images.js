import React, { useState } from "react";
export default function Images(props) {
  console.log(props.taskId);
  console.log(props.task);
  const pic1 = props.task.map((t) => t.local.floor);

  return (
    <div>
      IMAGES Floor: {pic1} / ID: {props.taskId} /{" "}
      {props.task.map((t) => t.local.name)}
    </div>
  );
}

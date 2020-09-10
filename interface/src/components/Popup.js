import React from "react";
import Images from "./Images";
import Documents from "./Documents";
import Videos from "./Videos";
import "../sass/popup.scss";
import { close } from "./modules/popup.js";

export default function Popup(props) {
  console.log(props.taskId);
  console.log(props.tasks);
  return (
    <div className="Popup hide">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-x"
        onClick={close}>
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
      <div>POPUP</div>
      <Images
        task={props.tasks.filter((t) => t.id === props.taskId)}
        taskId={props.taskId}></Images>
      <Documents></Documents>
      <Videos></Videos>
    </div>
  );
}

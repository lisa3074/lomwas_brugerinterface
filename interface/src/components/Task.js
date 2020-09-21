import React from "react";
import Switch from "./Switch";
import Media from "./Media";
import "../sass/task.scss";
import "../sass/task-shown.scss";
import "../sass/task-hidden.scss";
import { closeExpand } from "./modules/closeExpand.js";

export default function Task(props) {
  return (
    <article className="Task">
      <div id="accordion2" className={"accordion a" + props.id} role="tablist">
        <div className={"accordion-wrapper a" + props.id} data-state="start">
          <div
            className="accordion-title ui-accordion-header ui-state-active"
            onClick={() => closeExpand("a" + props.id)}>
            <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
            <p>LOKALE: {props.local.id}</p>
            <p> {props.local.name}</p>
          </div>
          <div
            className="accordion-body ui-accordion-content"
            onClick={() => closeExpand("a" + props.id)}>
            <p>{props.description}</p>
            <p className="read-more">
              ... <span className="blue-text">Læs mere</span>
            </p>
          </div>
          <Switch id={props.id}></Switch>
          <Media
            id={props.id}
            task={props.task}
            tasks={props.tasks}
            getMedia={props.getMedia}
            getMediaElement={props.getMediaElement}></Media>
          <div className="space"></div>
        </div>
      </div>
    </article>
  );
}

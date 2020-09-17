import React from "react";
import Switch from "./Switch";
import Media from "./Media";
import "../sass/task.scss";
import { closeExpand } from "./modules/closeExpand.js";
export default function Task(props) {
  return (
    <article className="Task">
      <div
        id="accordion2"
        className={
          "accordion ui-accordion ui-widget ui-helper-reset a" + props.id
        }
        role="tablist">
        {/* IS IT POSSIBLE TO REMOVE SOME OF THE CLASSES FOR READABILITY?? */}
        <div className={"accordion-wrapper a" + props.id} data-state="start">
          <div
            className="accordion-title ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active"
            onClick={() => closeExpand("a" + props.id)}>
            <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
            <p>LOKALE: {props.local.id}</p>
            <p> {props.local.name}</p>
          </div>
          <div
            className="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active"
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
          {/*    <p className="read-more" onClick={() => closeExpand("a" + props.id)}>
            ... <span className="blue-text">Læs mere</span> */}
          {/* </p> */}
          <div className="space"></div>
        </div>
      </div>
    </article>
  );
}

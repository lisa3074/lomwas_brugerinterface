import React from "react";
import Switch from "./Switch";
import Media from "./Media";
import "../sass/task.scss";
/* import $ from "jquery"; */
import { closeExpand } from "./modules/closeExpand.js";
export default function Task(props) {
  return (
    <article
      className="Task"
      onClick={() => {
        props.getMedia(props.id);
      }}>
      <div
        id="accordion2"
        className={
          "accordion ui-accordion ui-widget ui-helper-reset a" + props.id
        }
        role="tablist">
        <div className={"accordion-wrapper a" + props.id} data-state="hidden">
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
          </div>
          <Switch id={props.id}></Switch>
          <Media></Media>
        </div>
      </div>
    </article>
  );
}

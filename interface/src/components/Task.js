import React from "react";
import Switch from "./Switch";
import Media from "./Media";
import "../sass/task.scss";
/* import $ from "jquery"; */
import { closeExpand } from "./modules/closeExpand.js";
export default function Task(props) {
  return (
    <article className="Task">
      <div
        id="accordion2"
        className={
          "accordion ui-accordion ui-widget ui-helper-reset a" + props.id
        }
        role="tablist"
        onClick={() => closeExpand("a" + props.id)}>
        <div className={"accordion-wrapper a" + props.id} data-state="hidden">
          <h6 className="accordion-title ui-accordion-header ui-corner-top ui-state-default ui-accordion-icons ui-state-hover ui-accordion-header-active ui-state-active">
            <span className="ui-accordion-header-icon ui-icon ui-icon-triangle-1-e"></span>
            <p>LOKALE: {props.scheduleID}</p>
            <p> {props.local.name}</p>
          </h6>
          <div className="accordion-body ui-accordion-content ui-corner-bottom ui-helper-reset ui-widget-content ui-accordion-content-active">
            {props.description}
          </div>
        </div>
      </div>

      <Switch></Switch>
      <Media></Media>
    </article>
  );
}

import React, { useState, useEffect } from "react";
import "../sass/switch.scss";
import { closeExpand } from "./modules/closeExpand";
import { isDone } from "./modules/switch.js";
import { checkSwitches } from "./modules/navigation.js";

//uden destructured props, uden setScheduleId og setUnfinishedTasks i dependencies (giver warning, men virker)
export default function Switch(props) {
  const [done, setDone] = useState([]);
  const [unFinishedTasks, setUnFinishedTasks] = useState([]);
  console.log(done);

  useEffect(() => {
    props.setScheduleId(done);
  }, [done]);

  useEffect(() => {
    props.setUnfinishedTasks(unFinishedTasks);
  }, [unFinishedTasks]);

  //med destructured props, uden setScheduleId og setUnfinishedTasks i dependencies (giver ingen warning, men kan ikke teste om det virker)
  /* export default function Switch(props, { setScheduleId, setUnfinishedTasks }) {
  const [done, setDone] = useState([]);
  const [unFinishedTasks, setUnFinishedTasks] = useState([]);
  console.log(done);

  useEffect(() => {
    setScheduleId(done);
  }, [done, setScheduleId]);

  useEffect(() => {
    setUnfinishedTasks(unFinishedTasks);
  }, [unFinishedTasks, setUnfinishedTasks]); */

  function resetFinishedButton() {
    document.querySelector("#finish").dataset.state = "hidden firstClick";
  }

  return (
    <>
      <fieldset className={"Switch hide a" + props.id} onClick={resetFinishedButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#10b759"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-check hide"
          data-id={props.id}>
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div className={"custom-control custom-switch"}>
          <input
            type="checkbox"
            className={"switch custom-control-input a" + props.id}
            id={"customSwitch1" + props.id}
            value={props.id}
            data-state={props.task.scheduleID}
            onChange={(e) => {
              checkSwitches(props.setDisableIt, e); //callback function, that sets if select should be disabled (when no tasks are marked as done) or not.
              isDone(setDone, props.allTasks, setUnFinishedTasks);
            }}
            disabled
          />
          <label className="custom-control-label" htmlFor={"customSwitch1" + props.id}>
            AFSLUTTET
          </label>
        </div>
      </fieldset>
      <div className="fill-media" onClick={() => closeExpand(props.id)}></div>
    </>
  );
}

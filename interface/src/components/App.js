import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { FetchData } from "./modules/fetchData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../lib/@fortawesome/fontawesome-free/css/all.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../assets/css/dashforge.css";
import "../sass/style.scss";
import "../sass/app.scss";
import "../../node_modules/moment/locale/da.js";
import "../../node_modules/moment/locale/en-gb.js";

export default function App() {
  //library to keep track of date (both Danish and English)
  const moment = require("moment");
  const momentEn = require("../../node_modules/moment/min/moment-with-locales.min.js");
  const week = moment().isoWeek();

  //States
  const [tasks, setTasks] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingId, setBuildingId] = useState();
  const [UpdatedBuildingId, setUpdatedBuildingId] = useState([buildingId]);

  //function that is being passed to Main.js and called whenever a new building has been selected
  function updateBuildingId(e) {
    console.log("updateBuildingId");
    console.log(e);
    setUpdatedBuildingId(e);
  }

  //fetching buildings for the navigation, and a buildingId for the tasks
  useEffect(() => {
    FetchData.getBuilding(setBuildings, setBuildingId);
  }, []);

  //fetches the tasks of the first building (that per say is selected in the navigation).
  //Every time buildingId is updated, tasks are fetched
  useEffect(() => {
    console.log("fetchTasks");
    FetchData.getTasks(buildingId, setTasks);
  }, [buildingId]);

  //fetches the tasks of the building selected in the nav Every time updateBuildingId is updated,
  //tasks are fetched (every time a new ubuilding is selected in the nav)
  useEffect(() => {
    console.log("fetchTasks");
    FetchData.getTasks(UpdatedBuildingId, setTasks);
  }, [UpdatedBuildingId]);

  //Preloader
  if (tasks) {
    if (tasks.length === 0) {
      return (
        <div className="load_container">
          <h1 className="loading">LOADING</h1>
        </div>
      );
    }
  }

  // TODO
  // Afslutte/fortryde afslutte task

  // starte muligheden for at afslutte tasks (switch skal være disabled, når start ikke er aktiv)
  // Nulstille start(sættte swiches til disabled)

  // Sende besked (vise andet view der er lavet)
  // Se uafslttede opgaver (vise andet view der er lavet)

  return (
    <section id="App">
      {tasks === "" && <h3>Loading</h3>}
      <h1>Opgaver</h1>
      <p className="dk-date text-muted">
        {`${moment()
          .format("dddd")
          .substring(0, 1)
          .toUpperCase()}${moment()
          .format("dddd, Do MMMM YYYY")
          .substring(1)
          .toLowerCase()} (Uge 
          ${week}`}
        )
      </p>
      <p className="en-date text-muted hide">
        {`${momentEn()
          .format("dddd")
          .substring(0, 1)
          .toUpperCase()}${momentEn()
          .format("dddd, MMMM Do YYYY")
          .substring(1)
          .toLowerCase()} (Uge 
          ${week}`}
        )
      </p>
      <Nav buildings={buildings} updateBuildingId={updateBuildingId}></Nav>

      {/* if tasks is true, put the Main component in, otherwise don't put anything in */}
      {tasks ? <Main tasks={tasks}></Main> : ""}
    </section>
  );
}

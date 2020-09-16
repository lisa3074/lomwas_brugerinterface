import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { FetchData } from "./modules/fetchData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/dashforge.css";
import "../sass/style.scss";
import "../sass/app.scss";
//test if they are used =>
import "../../node_modules/moment/locale/da.js";
import "../../node_modules/moment/locale/en-gb.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../lib/@fortawesome/fontawesome-free/css/all.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import { checked } from "./modules/checked";

export default function App() {
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
        <div className="spinner-wrapper">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }
  }
  /*   setTimeout(() => {
    checked();
  }, 1000); */

  // TODO
  // Sende besked (vise andet view der er lavet)
  // Se uafslttede opgaver (vise andet view der er lavet)

  return (
    <section id="App">
      <h1>Opgaver</h1>
      <p className="dk-date text-muted"></p>
      <p className="en-date text-muted hide"></p>
      <Nav buildings={buildings} updateBuildingId={updateBuildingId}></Nav>

      {/* if tasks is true, put the Main component in, otherwise don't put anything in */}
      {tasks ? <Main tasks={tasks}></Main> : ""}
    </section>
  );
}

import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { FetchData } from "./modules/fetchData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/dashforge.css";
import "../sass/style.scss";
import "../sass/app.scss";
import "../lib/ionicons/css/ionicons.min.css";

export default function App() {
  //States
  const [tasks, setTasks] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [buildingId, setBuildingId] = useState();
  const [UpdatedBuildingId, setUpdatedBuildingId] = useState([buildingId]);

  //function that is being passed to Main.js and called whenever a new building has been selected
  function updateBuildingId(e) {
    setUpdatedBuildingId(e);
  }
  //fetching buildings for the navigation, and a buildingId for the tasks
  useEffect(() => {
    FetchData.getBuilding(setBuildings, setBuildingId);
  }, []);

  //fetches the tasks of the first building (that per say is selected in the navigation).
  //Every time buildingId is updated, tasks are fetched
  useEffect(() => {
    FetchData.getTasks(buildingId, setTasks);
  }, [buildingId]);

  //fetches the tasks of the building selected in the nav Every time updateBuildingId is updated,
  //tasks are fetched (every time a new ubuilding is selected in the nav)
  useEffect(() => {
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

  return (
    <section id="App">
      <h1>Opgaver</h1>
      {/* Danish date */}
      <p className="dk-date text-muted"></p>
      {/* English date */}
      <p className="en-date text-muted hide"></p>

      {/* passing buildings array and update function to navigation*/}
      <Nav buildings={buildings} updateBuildingId={updateBuildingId}></Nav>

      {/* if tasks is true, put the Main component in, otherwise don't put anything in */}
      {tasks ? <Main tasks={tasks}></Main> : ""}
    </section>
  );
}

// TODO
//gennemgå al kode og kommenter

// Sende besked (vise andet view der er lavet)
// Se uafslttede opgaver (vise andet view der er lavet)

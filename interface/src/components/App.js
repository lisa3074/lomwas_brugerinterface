import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { FetchData, getTasks } from "./modules/fetchData.js";
import "bootstrap/dist/css/bootstrap.min.css";
/* import $ from "jquery";
import Popper from "popper.js"; */
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../lib/@fortawesome/fontawesome-free/css/all.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../assets/css/dashforge.css";
import "../sass/style.scss";
import "../sass/app.scss";
import "../../node_modules/moment/locale/da.js";
import "../../node_modules/moment/locale/en-gb.js";

export default function App() {
  const moment = require("moment");
  const momentEn = require("../../node_modules/moment/min/moment-with-locales.min.js");
  const week = moment().isoWeek();

  const [tasks, setTasks] = useState([]);
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    FetchData.getBuilding(setBuildings);
  }, []);
  console.log("dette er tasks: " + tasks);
  const buildingId = 4;

  useEffect(() => {
    FetchData.getTasks(buildingId, setTasks);
  }, []);

  console.log(buildings);
  console.log(tasks);

  if (tasks.length === 0) {
    return (
      <div className="load_container">
        <h1 className="loading">LOADING</h1>
      </div>
    );
  }

  // TODO
  //læse tasks ind fra API i kloner
  //if (etage == 00) => vis .etage0 p-tag og klon emner derind osv.

  // Skjule/vise media
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
      <Nav buildings={buildings}></Nav>

      <Main tasks={tasks}></Main>
    </section>
  );
}

//
//
//HUSK AT SÆTTE "PARTIALS" OP UNDER STYLE, SÅ DET ER NEMMERE AT FINDE RUNDT I!!!!
//
//

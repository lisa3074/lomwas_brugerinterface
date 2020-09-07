import React from "react";
import Nav from "./Nav";
import Main from "./Main";
import "../lib/@fortawesome/fontawesome-free/css/all.min.css";
import "../lib/ionicons/css/ionicons.min.css";
import "../assets/css/dashforge.css";
import "../sass/style.scss";

/* import "./modules/feather"; */
/* import "../lib/jquery/jquery.min.js";
import "../lib/bootstrap/js/bootstrap.bundle.min.js";
import "../lib/feather-icons/feather.min.js";
import "../assets/js/dashforge.js"; */

export default function App() {
  return (
    <section id="App">
      <Nav></Nav>
      <Main></Main>
    </section>
  );
}

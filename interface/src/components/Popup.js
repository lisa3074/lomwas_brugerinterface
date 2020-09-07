import React from "react";
import Images from "./Images";
import Documents from "./Documents";
import Videos from "./Videos";

export default function Popup() {
  return (
    <div className="Popup">
      <div>POPUP</div>
      <Images></Images>
      <Documents></Documents>
      <Videos></Videos>
    </div>
  );
}

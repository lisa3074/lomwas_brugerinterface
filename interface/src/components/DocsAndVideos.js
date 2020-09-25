import React from "react";
import { returnNothing } from "./modules/navigation";
export default function DocsAndVideos(props) {
  console.log(props.type);
  return (
    <>
      {props.type === "video" ? (
        <>
          <iframe src="https://www.youtube.com/embed/-C-ic2H24OU"></iframe>
          {props.newDrawer[props.elementKey]}
        </>
      ) : props.type === "docs" ? (
        <>
          <iframe src={require("../docs/0.pdf")} type="application/pdf" view="fit"></iframe>
          {props.newDrawer[props.elementKey]}
        </>
      ) : (
        returnNothing()
      )}
    </>
  );
}

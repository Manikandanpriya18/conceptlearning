import React from "react";
import Studentclass from "./Studentclass";

function Studentdata() {
  let studentdata = [
    { studentname: "manikandan", class: "ME(CSE)", percent: "100%" },
    { studentname: "manikandapriya", class: "ME(CSE)", percent: "100%" },
  ];
  return (
    <>
      <h1>Studentdata</h1>
      {studentdata[0].studentname}
      <Studentclass studentname={studentdata[1].studentname} />
    </>
  );
}

export default Studentdata;

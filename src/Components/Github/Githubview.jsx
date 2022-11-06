import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Calender from "./Calender";
import Stats from "./stats";
import "./Githubview.css"
const Githubview = () => {
  const { state } = useContext(ThemeContext)
  const mode = state.darkMode;
  return (
    <div id="gitbox">
      <h1 id='skill_h'>My  
      <span id='tech' style={{color: mode ? "white" : ""}} > Piece <span id='tech_2'>of</span> </span>
       Work</h1>
      <Calender />
      <Stats />
    </div>
  );
};

export default Githubview;

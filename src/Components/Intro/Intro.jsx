import React from "react";
import "./Intro.css"
import Github from "../../img/github.png"
import LinkedIn from "../../img/linkedin.png"
const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span> HI!  I Am </span>
          <span>Tarun Upadhyay</span>
          <span>
            A passionate Full-Stack Web Developer, Capable of writing Production-
            Ready Code like Single Page web application. High adaptability to learn new technologies quickly and
            pay attention to details. Enthusiastic and hard-working web
            developer.
          </span>
        </div>
        <button className="button i-button">Resume</button>
        <div className="i-icons">
          <img src={Github} alt="github"/>
          <img src={LinkedIn} alt="linkdin" />
        </div>
      </div>
      <div className="i-right">
        I am right side
      </div>
    </div>
  );
};

export default Intro;

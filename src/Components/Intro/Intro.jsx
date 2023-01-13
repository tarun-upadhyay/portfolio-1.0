import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import pic from "../../img/profile.png";
import gmail from "../../img/gmail.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import Resume from '../../img/Tarun-Kumar-Upadhyay-Resume.pdf'
const Intro = () => {
  const {state} = useContext(ThemeContext)
  return (
    <div className="intro" id="Home">
      <div className="i-left" >
        <div className="i-name">
          <span style={{color: state.darkMode && "white"}}> Hey! I Am </span>
          <span >Tarun Upadhyay</span>
         <div className="i-title">
         <div className="i-title-wrapper">
            <div className="i-title-item">Web Development</div>
            <div className="i-title-item">Front-end</div>
            <div className="i-title-item">Backend-end</div>
          </div>
         </div>
          <span>
            A passionate Full-Stack Web Developer, Capable of writing
            Production- Ready Code like Single Page web application. High
            adaptability to learn new technologies quickly and pay attention to
            details. Enthusiastic and hard-working web developer.
          </span>
        </div>
        <a href={Resume} download target="_blank"><button className="button i-button">Resume</button></a>
        
        <div className="i-icons">
          <a href="https://github.com/tarun-upadhyay" target="_blank" rel="noreferrer">
            <img src={Github} alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-upadhyay-18742a226/"
            target="_blank"
          >
            <img src={LinkedIn} alt="linkdin" />
          </a>
          <a
            href="mailto:tarunu88@gmail.com? &subject=Message from Portfolio website"
            target="_blank"
          >
            <img src={gmail} alt="" style={{height: "88px"}} />
          </a>
        </div>
      </div>
      <div className="i-right" style={{}}>
        
       
        <img src={pic} alt="d" id="profile_pic" />
      
       
        </div>
      {/* blur divs */}
      
    </div>
  );
};

export default Intro;

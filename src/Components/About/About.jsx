import React from 'react'
import "./About.css"
import about from "../../img/about.png"
const About = () => {
  return (<> 
    <div className="a" id='About'>
      <div className="a-left">
        <div className="a-card">
          <img src={about} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="a-title">
          <h1>About Me</h1>
          <p className="a-sub">
            I am a Full Stack web developer learning MERN Stack at Masai School. I have done done various group as well as individual projects in my coding journey.
          </p>
          <p className="a-des">
          I did graduation in a Bachelor of science. After graduation, I did part-time work in the family business, Where I deal with customers. From childhood, My interest was in technology I always think what is happening inside gadgets. That interest excites me to jump into the Coding carrier.
          </p>
        </div>
      </div>
      
    </div>
   <div id="Skills">
        
   </div>
  </>
  )
}

export default About
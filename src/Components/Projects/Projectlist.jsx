import React from 'react'
import { BsGithub } from "react-icons/bs";
import { GoEye } from "react-icons/go";
import "./Projectlist.css"
const Projectlist = ({img,name,github,tech,deployed,detail}) => {
  return (
    <div>
        <div className="project_child">
            <img src={img} alt=""  id="projects-imgs"/>
            <p id='pr_name'>{name}</p>
            <p className="details">
                {detail}
            </p>
            <div style={{display: "flex", gap: "5px" , padding:"10px"}}>
                <p className="tech_stack" style={{color: "red", paddding: "5px", fontSize:"18px"}}>
                    Tech Stack: 
                </p>
                <p className="tech_used" style={{fontWeight: "bolder"}}>
                    {tech}
                </p>
            </div>
        <div style={{display:"flex", gap:"40px"}}>
        <a href={github}  target="_blank">
           <BsGithub />
          
           </a>
           <a href={deployed} target="_blank">
           <GoEye/>
           </a>
        </div>
        </div>
    </div>
  )
}

export default Projectlist
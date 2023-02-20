import React from 'react'

import "./Projects.css"
import {arr} from "../../Utils/projects_data"
import Projectlist from './Projectlist'


const Projects = () => {
 
  return (
    <>
    <div className="project_parent" >
      <h1 id='heading_project'>
My Creative <span id='project_head_child'>Portfolio Section</span>

      </h1>
      <div className="p_main">
        {
          arr.map((el)=>{
            return  <Projectlist key={el.id} {...el}/>
          })
        }
      </div>

    </div>
    <div id="Contact"></div>
        </>
  )
}

export default Projects
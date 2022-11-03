import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

import {logo} from "../../Utils/projects_data"
import Skilllist from './Skilllist'
import "./Skills.css"
const Skills = () => {
 const {state } = useContext(ThemeContext)
 let mode = state.darkMode;

  return (
   <div className="main_s" id='Skills'>
    <h1 id='skill_h'>My <span id='tech' style={{color: mode ? "white" : ""}}>Technical</span> <span id='tech_2'>Skills</span></h1>
    <div className="s">
      {
        logo.map((el)=>{
          return <Skilllist key={el.id} {...el}/>
        })
      }
    </div>
    <div id="Projects"></div>
   </div>
  )
}

export default Skills
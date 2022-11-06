import React from 'react'
import "./Stats.css"
const Stats = () => {
  return (
    <div>
        <div className='streak'>
            <a href="https://github.com/tarun-upadhyay" target="_blank">
                <img className='streak_img' src="https://github-readme-streak-stats.herokuapp.com?user=tarun-upadhyay&theme=radical&border_radius=4.6" alt="" />
            </a>
        </div>
        <div className='lang_stats'>
           
            <a href="https://github.com/tarun-upadhyay">
                <img className='lang_st_img' src="https://github-readme-stats.vercel.app/api/top-langs/?username=tarun-upadhyay&
                langs_count=8" alt="" />
            </a>
            <a href="https://github.com/tarun-upadhyay" target="_blank">
                <img className='lang_st_img' src="https://github-readme-stats.vercel.app/api?username=tarun-upadhyay&show_icons=true&theme=gruvbox" alt="" />
            </a>
        </div>
    </div>

  )
}

export default Stats
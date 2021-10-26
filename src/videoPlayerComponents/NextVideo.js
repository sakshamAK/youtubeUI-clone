import React from 'react'
import sideImg from '../icons/nextVideo.png'
// import { Link } from 'react-router-dom'

const NextVideo = () => {
    return (
        <aside className = "secondary-video-container">
            <img src = {sideImg} alt = "fastest way to web dev" style = {{margin: "0 8px 8px 0"}} />
            <section className = "video-content-info">    
                <h4 style = {{margin: "0 0 5px 0"}}>Fastest way to be a MASTER web dev!!!</h4>
                <a href = "#S" className = "author" style = {{fontSize: "13px", letterSpacing: "0px"}} >Kevin Powell</a>
                <span className = "views" style = {{fontSize: "13px", letterSpacing: "0px"}} >200K views • 7 months ago</span>
            </section>
        </aside>
    )
}

export default NextVideo

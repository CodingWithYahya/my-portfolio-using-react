import "./HeroImgStyles.css"
import introImg from "../assets/intro-bg.jpg"
import React from 'react'
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={introImg} alt="IntroImg" />
        </div>

        <div className="content">
            <p>Hi , I'M Yahya QUAZBARI</p>
            <h1>Future computer engineer</h1>
            <div>
                <Link to="/Projects" className="btn" > Projects </Link>
                <Link to="/Contact" className="btn btn-light" > Contact </Link>
                
            </div>

        </div>
    </div>
  )
}

export default HeroImg
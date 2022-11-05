import "./Hero.css"
import { Link } from "react-router-dom"
import React from 'react'
import Img1 from "../assets/bg.jpg"
import profile from "../assets/1665428844472-01-03-01.jpeg"

const Hero = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="img1" src={Img1} alt="404 Error" />
        </div>

        <div className="headLine">
            <h1>Abhra Mondal</h1>
            <img className="profile" src={profile} alt="" />
            <p>Hello There</p>
            <h1>Full-Stack Developer</h1>
            <div>
            <Link to='/project' className='btn'>Projects</Link>
            <Link to='/contact' className="btn btn-light">Contact</Link>
        </div>
        </div>

        
    </div>
  )
}

export default Hero
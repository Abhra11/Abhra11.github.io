import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa"
import { useState } from "react";

const Navbar = () => {
  const [ham,setHam]=useState(false);
  const handleHam=()=>setHam(!ham);

  const [color,setColor]=useState(false);
  const changeColor=()=>{
    if(window.scrollY>=100){
      setColor(true);
    }else{
      setColor(false);
    }
  }

  window.addEventListener('scroll',changeColor)

  return (
    <div className={color ? "header header-bg": 'header '}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={ham? "nav active" : 'nav'}>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Me</Link>
        </li>

        <li>
          <Link to="/project">Project</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <a href="https://drive.google.com/file/d/1edyUIAW9WbLsvrXPpkfvzZHYMsRZSITI/view?usp=sharing">Resume</a>
        </li>
      </ul>

      <div className="ham" onClick={handleHam}>
        {ham?(
           <FaTimes size={20} style={{color:"#fff"}}/>
        ):(
          
          <FaBars size={20} style={{color:"#fff"}}/>
        )}
        
       
        
      </div>
    </div>
  );
};

export default Navbar;

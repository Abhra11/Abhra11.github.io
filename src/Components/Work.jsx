import "./Work.css";
import React from 'react';
import { TfiGithub } from "react-icons/tfi";
import { SiNetlify } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Error 404 not found" />
                <h2 className="project-title">Project 1 Title</h2>
                <div className="pro-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, inventore facere? Magnam vitae ad maiores. Fugit deleniti eveniet sed libero molestias aliquid? Necessitatibus porro quidem et mollitia placeat amet voluptate!</p>
                <div className="pro-btns">
                    <h1 className="logo-link">
                        <NavLink to="github.com"><TfiGithub/></NavLink>
                    </h1>
                    <h1 className="logo-link">
                        <NavLink to="netlify.com"><SiNetlify/></NavLink>
                    </h1>
                </div>
                
            </div>
            </div>

            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Error 404 not found" />
                <h2 className="project-title">Project 1 Title</h2>
                <div className="pro-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, inventore facere? Magnam vitae ad maiores. Fugit deleniti eveniet sed libero molestias aliquid? Necessitatibus porro quidem et mollitia placeat amet voluptate!</p>
                <div className="pro-btns">
                    <h1 className="logo-link">
                        <NavLink to="github.com"><TfiGithub/></NavLink>
                    </h1>
                    <h1 className="logo-link">
                        <NavLink to="netlify.com"><SiNetlify/></NavLink>
                    </h1>
                </div>
                
            </div>
            </div>

            <div className="project-card">
                <img src="https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="Error 404 not found" />
                <h2 className="project-title">Project 1 Title</h2>
                <div className="pro-details">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, inventore facere? Magnam vitae ad maiores. Fugit deleniti eveniet sed libero molestias aliquid? Necessitatibus porro quidem et mollitia placeat amet voluptate!</p>
                <div className="pro-btns">
                    <h1 className="logo-link">
                        <NavLink to="github.com"><TfiGithub/></NavLink>
                    </h1>
                    <h1 className="logo-link">
                        <NavLink to="netlify.com"><SiNetlify/></NavLink>
                    </h1>
                </div>
                
            </div>
            </div>

            
        </div>


    </div>
  )
}

export default Work
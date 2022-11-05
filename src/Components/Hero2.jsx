import "./Hero2.css"

import React, { Component } from 'react'
import { renderMatches } from "react-router-dom"

class Hero2 extends Component{
    render(){
        return (
            <div className="heroimg">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
          )
    }
  
}

export default Hero2
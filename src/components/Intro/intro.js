import React, { Component } from 'react';
import './intro.css'

class Intro extends Component{
    render(){
        return (
            <div className = "intro-container">
                <div className = "hi">
                    Hi, my name is
                </div>
                <div className = "name">
                    Meetanshi Mittal.
                </div>
                <div className = "name">
                    I build things for the web.
                </div>
                <div className = "about">
                    I'm a software engineer based in Boston, MA specializing in building (and occasionally designing) exceptional, high-quality websites and applications.
                </div>
                <div className = "btn">
                    Get In Touch
                </div>
            </div>
        )
    }
}

export default Intro;
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
                    I learn. I code. I build.
                </div>
                <div className = "about">
                    I am a Computer Science undergraduate based in Noida, India. I have experience in building web applications. Currently also exploring different specializations.
                </div>
                <div className = "btn">
                    Get In Touch
                </div>
            </div>
        )
    }
}

export default Intro;
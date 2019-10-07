import React, { Component } from 'react';
import './about.css';
import Subtitle from '../Subtitle/subtitle'

class About extends Component{
    render(){
        return (
            <>
            <Subtitle num = "01." title = "About Me" className="about-heading"/>
            <div className = "about-container">
                <div className = "content">
                    <div className = "maininfo">
                        Hello! I'm Meetanshi, a software engineer based in Noida, India who enjoys building things that live on the internet. 
                        I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient 
                        and modern backends.<br/><br/>Shortly after graduating from Northeastern University, I joined the engineering team at 
                        Upstatement where I work on a wide variety of interesting and meaningful projects on a daily basis.<br/><br/>Here's a 
                        few technologies I've been working with recently:
                    </div>
                    <div className = "tech-list">
                        <div className = "list-left">
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                C++
                            </div>
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                JavaScript (ES6+)
                            </div>
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                Python
                            </div>
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                React
                            </div>
                            
                        </div>
                        <div className = "list-right">
                        <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                MongoDB
                            </div>
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                NodeJS
                            </div>
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                Git
                            </div>
                            <div className = "list-item">
                            <i className="fa fa-angle-right bullet"></i>
                                Adobe Photoshop
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "picture-container">
                    <img className="picture" />
                </div>
                
            </div>
            </>
        )
    }
}

export default About;
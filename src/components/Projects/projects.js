import React, { Component } from 'react';
import './projects.css'

class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <div className="heading">Other Projects</div>
                <div className="projects-collection">
                    <div className="project-card">

                        <div className="project-links">
                            <i className="fa fa-folder-open-o fa-4x" aria-hidden="true" id="folder-icon"></i>
                            <i className="fa fab fa-github fa-2x"></i>
                        </div>
                        <div className="project-title">
                            Sign Language Recognition
                        </div>
                        <div className="project-desc">
                            A simple machine learning project to predict American sign language alphabet from images.
                        </div>
                        <div className="project-techlist">
                            <ul>
                                <li>Python</li>
                                <li>OpenCV</li>
                                <li>Keras</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-links">
                            <i className="fa fa-folder-open-o fa-4x" aria-hidden="true" id="folder-icon"></i>
                            <i className="fa fab fa-github fa-2x"></i>
                        </div>
                        <div className="project-title">
                            RESTful API
                        </div>
                        <div className="project-desc">
                            A complete login, signup API using JWT along with some additional features of online shopping like product catalog and users placing orders.
                        </div>
                        <div className="project-techlist">
                            <ul>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-links">
                            <i className="fa fa-folder-open-o fa-4x" aria-hidden="true" id="folder-icon"></i>
                            <i className="fa fab fa-github fa-2x"></i>
                        </div>
                        <div className="project-title">
                            Password Manager
                        </div>
                        <div className="project-desc">
                            It lets you store all your passwords at one place so that you only have to remember one master password to get access to all others.                        
                        
                        </div>

                        <div className="project-techlist">
                            <ul>
                                <li>HTML</li>
                                <li>JavaScript</li>
                                <li>PHP</li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
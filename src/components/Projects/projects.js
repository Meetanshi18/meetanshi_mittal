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
                            <i className="fa fa-external-link fa-2x"></i>
                        </div>
                        <div className="project-title">
                            Google Keep Clone
                        </div>
                        <div className="project-desc">
                            A simple Google Keep clone built with Vue and Firebase.
                        </div>
                        <div className="project-techstack">
                            <ul>
                                <li>Vue</li>
                                <li>Firebase</li>
                                <li>SCSS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-links">
                            <i className="fa fab fa-github fa-2x"></i>
                            <i className="fa fa-external-link fa-2x"></i>
                        </div>
                    </div>
                    <div className="project-card">
                        <div className="project-links">
                            <i className="fa fab fa-github fa-2x"></i>
                            <i className="fa fa-external-link fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;
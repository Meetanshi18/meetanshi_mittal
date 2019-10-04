import React, {Component} from 'react';
import Subtitle from '../Subtitle/subtitle';
import './featured.css';

class Featured extends Component{
    render(){
        return(
            <>
            <Subtitle num = "03." title = "Some Things I've Built"/>
            <div className="featured-container-main">
                <div className = "featured-container-1">
                    <div className = "project-image">
                        
                    </div>
                    <div className = "project-details-1">
                        <div className = "detail" id = "featured">
                            Featured Project
                        </div>
                        <div className = "project-name detail">
                            OctoProfile
                        </div>
                        <div className = "project-desc-1 detail">
                            A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.
                        </div>
                        <div className = "project-techstack detail">
                            <ul className = "tech-stack">
                                <li className = "tech-stack-item">Next.js</li>
                                <li className = "tech-stack-item">Chart.js</li>
                                <li className = "tech-stack-item" id="last-tech">Github API</li>
                            </ul>

                        </div>
                        <div className = "project-links detail">
                            
                                <i className="fa fa-github fa-2x" ></i>
                            
                                <i className="fa fa-external-link fa-2x"></i>
                            
                        </div>
                    </div>
                    
                </div>
                <div className = "featured-container-2">
                    
                    <div className = "project-details">
                        <div className = "detail" id = "featured">
                            Featured Project
                        </div>
                        <div className = "project-name detail">
                            OctoProfile
                        </div>
                        <div className = "project-desc-2 detail">
                            A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.
                        </div>
                        <div className = "project-techstack detail">
                            <ul className = "tech-stack">
                                <li className = "tech-stack-item" id = "firsttech">Next.js</li>
                                <li className = "tech-stack-item">Chart.js</li>
                                <li className = "tech-stack-item">Github API</li>
                            </ul>

                        </div>
                        <div className = "project-links detail">
                            
                                <i className="fa fa-github fa-2x" id = "firstlink"></i>
                            
                                <i className="fa fa-external-link fa-2x"></i>
                            
                        </div>
                    </div>
                    <div className = "project-image">
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Featured;
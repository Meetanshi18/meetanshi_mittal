import React, {Component} from 'react';
import Subtitle from '../Subtitle/subtitle';
import './featured.css';

class Featured extends Component{
    render(){
        return(
            <>
            <Subtitle num = "03." title = "Some Things I've Built"/>
            <div className = "featured-container">
                <div className = "project-image">
                    
                </div>
                <div className = "project-details">
                    <div className = "detail" id = "featured">
                        Featured Project
                    </div>
                    <div className = "project-name detail">
                        OctoProfile
                    </div>
                    <div className = "project-desc detail">
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
                        
                            <i class="fa fa-github fa-2x"></i>
                        
                            <i class="fa fa-external-link fa-2x"></i>
                        
                    </div>
                </div>
            </div>

            </>
        )
    }
}

export default Featured;
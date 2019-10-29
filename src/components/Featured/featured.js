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
                    <div className = "project-image-1">
                        
                    </div>
                    <div className = "project-details-1">
                        <div className = "project-name-1 detail">
                            Crop Burning Analysis
                        </div>
                        <div className = "project-desc-1 detail">
                            Delhi witnesses a spike in particulate matter PM 2.5 limits in October-November, which is also the peak
                            season for paddy harvesting, when abundant crop residue is burnt by farmers to prepare for
                            the next crop. This project uses Python to analyze the effect of crop-burning on Delhi's air quality index.                       
                        </div>
                        <div className = "project-techstack detail">
                            <ul className = "tech-stack">
                                <li className = "tech-stack-item">Python</li>
                                <li className = "tech-stack-item">Matplotlib</li>
                                <li className = "tech-stack-item" id="last-tech">Numpy</li>
                            </ul>

                        </div>
                        <div className = "project-link">

                                <a href="https://github.com/Meetanshi18/crop-burning-analysis" target="_blank" >
                                    <i className="fa fa-github fa-2x" ></i>
                                </a>                                
                            
                        </div>
                    </div>
                    
                </div>
                <div className = "featured-container-2">
                    
                    <div className = "project-details-2">
                        <div className = "project-name-2 detail">
                            Farmelp
                        </div>
                        <div className = "project-desc-2 detail">
                            This project helps young adults learn more about agriculture, lets farmers seek help, or even sell their land by explaining what type of land they have in their local language.
                        </div>
                        <div className = "project-techstack detail">
                            <ul className = "tech-stack">
                                <li className = "tech-stack-item" id = "firsttech">HTML</li>
                                <li className = "tech-stack-item">JavaScript</li>
                                <li className = "tech-stack-item">PHP</li>
                                <li className = "tech-stack-item">Trasliteration API</li>
                            </ul>

                        </div>
                        <div className = "project-link">
                            <a href="https://github.com/Meetanshi18/Farmelp" target="_blank">
                                <i className="fa fa-github fa-2x" id = "firstlink"></i>
                            </a>                               
                                                        
                        </div>
                    </div>
                    <div className = "project-image-2">
                        
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Featured;
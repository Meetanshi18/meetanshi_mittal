import React from 'react';
import './social.css'

const Social = ()=>{
    return (
        <div className = "social-container">
            <div className = "github icon">
                <a href="https://github.com/Meetanshi18" target="_blank">
                    <i className="fa fab fa-github fa-2x"></i>
                </a>                
            </div>
            <div className = "linkedin icon">
                <a href="https://www.linkedin.com/in/meetanshi-mittal-2a6270176/" target="_blank">
                    <i className="fa fab fa-linkedin fa-2x"></i>
                </a>
            </div>
            {/* <div className = "facebook icon">
                <i className="fa fab fa-facebook fa-2x"></i>
            </div> */}
            <div className = "bottom-line">

            </div>
        </div>
    )
}

export default Social;
import React from 'react';
import './subtitle.css'

const Subtitle = ({num, title}) => {
    return(
        <div className = "subtitle-container">
            <span className = "num">{num}</span>
            <span className = "title">{title}</span>
            <div className = "line"><hr/></div>
        </div>
    )
}

export default Subtitle;
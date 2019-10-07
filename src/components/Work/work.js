import React, {Component} from 'react';
import './work.css'
import Subtitle from '../Subtitle/subtitle';

class Work extends Component{

    constructor(props){
        super(props);
        this.state = {
            company : 'TSWE'
        }
    }

    clickHandler = (e) => {
        console.log(e.target.id);
        this.setState({
            company : e.target.id
        })
    }

    render(){
        let company = this.state.company;
        let jobdesc;
        if(company === 'TSWE'){
            jobdesc = (
                <div className = "c-desc" id ="upstatement-desc">
                    <div className = "job-position">
                        Scholar <span id = "company-name">@ TalentSprint WE by Google</span>
                    </div>
                    <div className = "date">
                        June 2019 - June 2020
                    </div>
                    <div className = "duties">
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Helped solidify a brand direction for blistabloc that spans both packaging and web
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Interfaced with clients on a weekly basis, providing technological expertise
                        </div>
                    </div>
                </div>
            )
        } else if(company === 'DSC'){
            jobdesc = (
                <div className = "c-desc" id ="scout-desc">
                    <div className = "job-position">
                        Coordinator <span id = "company-name">@ Developer Student Clubs</span>
                    </div>
                    <div className = "date">
                        June 2018 - Present
                    </div>
                    <div className = "duties">
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Helped solidify a brand direction for blistabloc that spans both packaging and web
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Interfaced with clients on a weekly basis, providing technological expertise
                        </div>
                    </div>
                </div>
            )
        } else if(company === 'Sleeping8'){
            jobdesc = (
                <div className = "c-desc" id ="scout-desc">
                    <div className = "job-position">
                        Web Developer Intern <span id = "company-name">@ Sleeping8</span>
                    </div>
                    <div className = "date">
                        April - May 2019
                    </div>
                    <div className = "duties">
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Helped solidify a brand direction for blistabloc that spans both packaging and web
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Interfaced with clients on a weekly basis, providing technological expertise
                        </div>
                    </div>
                </div>
            )
        } else {
            jobdesc = (
                <div className = "c-desc" id ="apple-desc">
                    <div className = "job-position">
                        Graphic Design Intern <span id = "company-name">@ Pinnacle Animation</span>
                    </div>
                    <div className = "date">
                        Feb - March 2019
                    </div>
                    <div className = "duties">
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Helped solidify a brand direction for blistabloc that spans both packaging and web
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Interfaced with clients on a weekly basis, providing technological expertise
                        </div>
                    </div>
                </div>
            )
        }

        return(
            <>
            <div className = "subheading">
                <Subtitle num = "03." title = "Where I've Worked"/>
            </div>
            
            <div className = "work-container">
                <div className = "company-names">
                    <div className = "c-name " id = "TSWE" onClick = {(e)=>this.clickHandler(e)}>
                        TalentSprint WE
                    </div>
                    <div className = "c-name " id = "DSC" onClick = {(e)=>this.clickHandler(e)}>
                        DSC JIIT Noida
                    </div>
                    <div className = "c-name " id = "Sleeping8" onClick = {(e)=>this.clickHandler(e)}>
                        Sleeping8
                    </div>
                    <div className = "c-name " id = "Pinnacle" onClick = {(e)=>this.clickHandler(e)}>
                        Pinnacle Animation
                    </div>
                </div>
                <div className = "company-desc">
                    {jobdesc}                    
                </div>
            </div>
            </>
        )
    }
}

export default Work;
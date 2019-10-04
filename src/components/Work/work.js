import React, {Component} from 'react';
import './work.css'
import Subtitle from '../Subtitle/subtitle';

class Work extends Component{

    constructor(props){
        super(props);
        this.state = {
            company : 'upstatement'
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
        if(company === 'upstatement'){
            jobdesc = (
                <div className = "c-desc" id ="upstatement-desc">
                    <div className = "job-position">
                        Studio Developer <span id = "company-name">@ Upstatement</span>
                    </div>
                    <div className = "date">
                        Jan - April 2018
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
        } else if(company === 'scout'){
            jobdesc = (
                <div className = "c-desc" id ="scout-desc">
                    <div className = "job-position">
                        Studio Developer <span id = "company-name">@ Scout</span>
                    </div>
                    <div className = "date">
                        Jan - April 2018
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
                        Studio Developer <span id = "company-name">@ Apple</span>
                    </div>
                    <div className = "date">
                        Jan - April 2018
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
                    <div className = "c-name " id = "upstatement" onClick = {(e)=>this.clickHandler(e)}>
                        Upstatement
                    </div>
                    <div className = "c-name " id = "scout" onClick = {(e)=>this.clickHandler(e)}>
                        Scout
                    </div>
                    <div className = "c-name " id = "apple" onClick = {(e)=>this.clickHandler(e)}>
                        Apple
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
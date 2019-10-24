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
                            Went through an intensive one month long bootcamp where I learnt about good coding practices. I learnt to write readable, changeable and testable code.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Learnt about object-oriented designs, programming languages new to me like Python, making documents using Latex and much more in a very short period of time.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Enjoyed working long hours and in the last week made a machine learning project from scratch and learnt about the basic concepts and algorithms used in machine learning.
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
                            Developer Student Clubs has been an integral part of my college life and it has helped me boost my developer skills. I've worked with seniors on various web applications, building wireframes and adding javascript functionality.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Conducted workshops on frontend and backend web developement, pwa, flutter and other latest technologies.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Being a core team member, played a major role in organizing hackathons, tech-talks and other events.                        </div>
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
                            I had an amazing time working with this startup trying to provide a platform to emerging artists. I got amazing mentors who always pushed me to do my best work.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Integrated Instagram and Youtube API calls with their web app.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Learnt React on the go and built a basic application using it.
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
                            Worked remotely with a team of designers to design and create clean and beautiful digital marketing content like posters, logos and background covers for social media.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            I got to learn working with Adobe Photoshop and Adobe Illustrator.
                        </div>
                        <div className = "duty">
                            <i className="fa fas fa-caret-right bullet"></i>
                            Communicated with team members weekly to refine our designs and think of creative ideas.
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
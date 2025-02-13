import searchJob from "../assets/img/searchforjobs.svg"
import aboutMigration from "../assets/img/learnabtimmigration.svg"
import writeResume from "../assets/img/writeresumecoverlt.svg"
import transcribe from "../assets/img/transcribetoenglish.svg"
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

export default function Tools() {
    return (
        <>
            <h1>Put your ai assistant to work</h1>
            <div className="toolsContainer">
                <div className="toolsTop">
                    <Link to={'/Jobs'}>
                    <div className="toolsCard">
                        <img src={searchJob} className="logo react" alt="searchjob" />
                        <div>
                            <h3>Search for Jobs</h3>
                            <p>Find job postings that  match your profile</p>
                        </div>
                    </div>
                    </Link>

                    <Link to={'/Jobs'}>
                    <div className="toolsCard">
                        <img src={writeResume} className="logo react" alt="searchjob" />
                        <div>
                            <h3>Write resume</h3>
                            <h3> & cover letter</h3>
                            <p>Create application documents in seconds</p>
                        </div>
                    </div>
                    </Link>
                </div>


                <div className="toolsBottom">
                <Link>
                    <div className="toolsCard">
                        <img src={aboutMigration} className="logo react" alt="searchjob" />
                        <div>
                            <h3>Learn about</h3>
                            <h3>Immigration</h3>
                            <p>Have questions about canada? simizi has answers</p>
                        </div>
                    </div>
                 </Link>
                 <Link to={'Transcribe'}>
                    <div className="toolsCard">
                        <img src={transcribe} className="logo react" alt="searchjob" />
                        <div>
                            <h3>Transcribe</h3>
                            <h3>audio to english</h3>
                            <p>Wanna talk it out?use our mouse to transcribe to english</p>
                        </div>
                    </div>
                </Link>
                </div>
            </div>
        </>
    )
}
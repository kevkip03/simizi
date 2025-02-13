import immigrationIcon from '../assets/immigration.svg'
import jobIcon from '../assets/jobs.svg'
import resumeIcon from '../assets/resume.svg'
export default function About() {
    return (
        <div className='aboutArea'>
            {/* <h1>about area</h1> */}
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={immigrationIcon} className="logo react" alt="React logo" />
                </a>
                <p>Answer questions about immigration</p>
            </div>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={jobIcon} className="logo react" alt="React logo" />
                </a>
                <p>Discover jobs Tailored to your skils</p>
            </div>
            {/* add resume icon  */}
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={resumeIcon} className="logo react" alt="React logo" />
                </a>
                <p>Write resume and cover letters</p>
            </div>
        </div>

    )
}
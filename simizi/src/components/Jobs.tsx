// import simiziLogo from '../assets/simizi.svg'
// import viteLogo from '/vite.svg'
import { Link, useNavigate} from "react-router-dom"
import JobBoard from "./JobBoard"
import coverLetter from "./CoverLetter"
import Location from "./Location"


export default function Jobs(){
    const jobs = [
      {id:1,title:"waiter",employer:"London ltd",City:"London",province:"manchester"},
      {id:2,title:"chief cheff",employer:"china ltd",City:"London",province:"manchester"},
      {id:3,title:"Janitor",employer:"china ltd",City:"London",province:"manchester"},
      {id:4,title:"engineer",employer:"toyota ltd",City:"London",province:"manchester"},
      {id:5,title:"doctor",employer:"knh ltd",City:"nairobi",province:"nairobi"},
      {id:6,title:"nurse",employer:"knh ltd",City:"nairobi",province:"nairobi"},

    ]
    const options = ['Nairobi', 'Mombasa', 'KIsumu'];
    const navigate = useNavigate()
    const location =()=>{
      navigate('/Location')
      
    }  

   
    const resume =()=>{
      navigate('/Resume')
    }
    const coverLetter =()=>{
      navigate('/CoverLetter')
    }
    const Apply =()=>{
      navigate('/Apply')
    }
    return(
    <>
    <JobBoard />
    <div className="jobs">
        <ul>
          {jobs.map(job =>( 
            <div className="jobsConner">
            <div className="jobscont">
            <div className="jobsContainer">
            <li key={job.id}><h1>{job.title}</h1></li>
            <li key={job.id}>{job.employer}</li>
            <li key={job.id}>{job.City}</li>
            <li key={job.id}>{job.province}</li>
            </div>
            </div>
            <div className="jobsButtons">
            <button onClick={location}>Location Info</button>
            <button onClick={resume} >Write resume</button>
            <button onClick={coverLetter}>Write cover letter</button>
            <button onClick={Apply}>Apply</button>
            </div>
            </div>
          ))}
        </ul>

    </div>
    </>

    )
}
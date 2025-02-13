import { useNavigate } from 'react-router-dom';
export default function WorkJob(){
    const navigate=useNavigate()
    const navi =()=>{
        navigate('/Reesources')
    }
    return(
        <div className="hero">
            <h1>Finding work shouldn't be a job.</h1>
            <p>Simizi has one job. And that's to find you a job. 
It's designed to make the process of finding and applying for jobs postings as easy 
as possible - saving you time and maximizing your chances of success.</p>
            <button onClick={navi}>Get Started</button>
        </div>
        
        
    )
}
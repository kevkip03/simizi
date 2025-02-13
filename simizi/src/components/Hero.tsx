import { useNavigate } from 'react-router-dom';

export default function Hero(){

    const navigate=useNavigate()
    const navi =()=>{
        navigate('/Jobs')
    }
    
    return(
        <div className="hero">
            <h1>The job search made 
            simple and easy with AI.</h1>
            <p>Simizi is your all-in-one AI tool for connecting 
            employees with employers in Canada and beyond</p>
            <button onClick={navi} >Get Started</button>
        </div>
        
        
    )
}
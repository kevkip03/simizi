import { Link } from 'react-router-dom';
//import FileUpload from './FileUpload';

export default function Footer(){
    // const navigate=useNavigate()
    // const navi =()=>{
    //     navigate('./LogIn')
    // }
    
    return(
    <div className="footer">
        <p>Interested in being an affiliate?</p>
        <Link to={'/LogIn'}>
        <button>Affiliate signup</button>
        </Link>

        {/* <FileUpload /> */}
    </div>
    )
}
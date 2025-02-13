import canada from '../assets/img/canada.svg';
import languageskills from '../assets/img/languageskills.svg';
import livinginsights from '../assets/img/livinginsights.svg';
import salary from '../assets/img/salary.svg';
import taxesfinances from '../assets/img/taxesfinances.svg';
import resumewriting from '../assets/img/resumewriting.svg';
import { Link, useNavigate} from "react-router-dom";
// import CanadianNews from './CanadianNews';

// const navigate = useNavigate();

// const CanadianNews =()=>{
//     navigate('/CanadianNews')
//   }
export default function Reesources() {
    return (
        <div className='resourcescontainer'>
            {/* <h1>resources page area</h1> */}

            <div className='resTop'>
                <Link to={'/CanadianNews'}>
                <div className='resContainer'>
                    <div className='resourcesIcons'>
                        <img src={canada} alt="" />
                    </div>
                    <div>
                        <h2>canadian immigration & citizenship news</h2>
                        <p>Get the latest canadian immigration news</p>
                    </div>
                </div>
                </Link>
                <Link to={'/LivingInsights'}>
                <div className='resContainer'>
                    <div className='resourcesIcons'>
                        <img src={livinginsights} alt="" />
                    </div>
                    <div>
                        <h2>Living insights</h2>
                        <p>Find out what it is like living in a specific canadian city</p>
                    </div>
                </div>
                </Link>
                <Link to={'/ResumeWriting'}>
                <div className='resContainer'>
                    <div className='resourcesIcons'>
                        <img src={resumewriting} alt="" />
                    </div>
                    <div>
                        <h2>resume writing</h2>
                        <p>Learn how to write an effective resume</p>
                    </div>
                </div>
                </Link>
            </div>
            <div className='resBottom'>
                <Link to={'/LanguageSkills'}>
                <div className='resContainer'>
                    <div className='resourcesIcons'>
                        <img src={languageskills} alt="" />
                    </div>
                    <div>
                        <h2>Language skills</h2>
                        <p>Learn specific language skills for the canadian workforce</p>
                    </div>
                </div>
                </Link>
                <Link to={'/Salary'}>
                <div className='resContainer'>
                <div className='resourcesIcons'>
                    <img src={salary} alt="" />
                </div>
                <div>
                <h2>salary outlook</h2>
                <p>set your expectations for salary and cost of living in canada</p>
                </div>
                </div>
                </Link>
                <Link to={'/Taxes'}>

                <div className='resContainer'>
                <div className='resourcesIcons'>
                    <img src={taxesfinances} alt="" />
                </div>
                <div>
                <h2>Taxes and finaces</h2>
                <p>Navigate taxation and finacial management in canada</p>
                </div>
                </div>
                </Link>

            </div>
        </div>
    )
}
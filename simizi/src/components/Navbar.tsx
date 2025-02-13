import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import simiziLogo from '../assets/simizi.svg'
// import Jobs from './Jobs';
// import Tools from './Tools';
// import Homepage from './Homepage';
// import Reesources from './Reesources';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";



export default function Navbar() {
    return (
        //  <Router>
        <div className='navdiv'>

            <nav>
                <div className='logo'>
                    <a href="/">
                        <img src={simiziLogo} className="logo react" alt="React logo" />
                    </a>
                </div>

                <ul className="navArea">
                    <li>
                        <Link to="./Jobs">
                            <button>
                                Jobs
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="./Reesources">
                            <button>
                                Resources
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="./Tools">
                            <button>
                                Tools
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="./Login">
                            <button>
                                Login
                            </button>
                        </Link>
                    </li>
                    <li>
                        <SignedOut>
                            <SignInButton />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </li>

                </ul>

            </nav>

        </div>
        //    <Routes>
        //        <Route path="/" element={<Homepage />} />
        //        <Route path="/Reesources" element={<Reesources />} />
        //        <Route path="/Tools" element={<Tools />} />
        //        <Route path="/Jobs" element={<Jobs />} />
        //    </Routes> 
        //     </Router>


    )
}
// import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Footer from './components/Footer'
import Homepage from './components/Homepage'
import Jobs from './components/Jobs';
import Tools from './components/Tools';
import Reesources from './components/Reesources';
import Location from './components/Location';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import Apply from './components/Apply';
import CanadianNews from './components/CanadianNews';
import ResumeWriting from './components/resumeWriting';
import LivingInsights from './components/LivingInsights';
import LanguageSkills from './components/LanguageSkills';
import Salary from './components/Salary';
import Taxes from './components/Taxes';
import Transcribe from './components/Transcribe';
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

function App() {


  return (
  <>
<Router>
       <Navbar />
       <Routes>
           <Route path="/" element={<Homepage />} />
           <Route path="/Reesources" element={<Reesources />} />
           <Route path="/Tools" element={<Tools />} />
           <Route path="/Jobs" element={<Jobs />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Location" element={<Location />} />
           <Route path="/Resume" element={<Resume />} />
           <Route path="/CoverLetter" element={<CoverLetter />} />
           <Route path="/Apply" element={<Apply />} />
           <Route path="/CanadianNews" element={<CanadianNews />} />
           <Route path="/ResumeWriting" element={<ResumeWriting />} />
           <Route path="/ResumeWriting" element={<ResumeWriting />} />
           <Route path="/LivingInsights" element={<LivingInsights />} />
           <Route path="/LanguageSkills" element={<LanguageSkills />} />
           <Route path="/Salary" element={<Salary />} />
           <Route path="/Taxes" element={<Taxes />} />
           <Route path="Tools/Transcribe" element={<Transcribe />} />


       </Routes> 
       <Footer />
        </Router>
      
    </>
   
  )
}

export default App

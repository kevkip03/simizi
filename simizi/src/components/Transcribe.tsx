import { PiMicrophoneFill } from "react-icons/pi";

export default function Transcribe(){
    return(
        <div className="hero">
            <h1>Tap here to transcribe audio to text</h1>
            <div className="microphone">
            <PiMicrophoneFill />
            </div>
            <div>
            <input className="transInput" />
            </div>
        </div>
        
        
    )
}
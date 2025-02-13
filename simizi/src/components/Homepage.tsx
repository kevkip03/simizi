
import Hero from './Hero'
import Action from './Action'
import About from './About'
import Findwork from './Findwork'
import WorkJob from './WorkJob'
import Mpesa from './Mpesa'
export default function Homepage(){
    return(
        <div>
         {/* <h1>Homepage page area</h1> */}
              <Hero />
              <Action />
              <Mpesa />
              <About />
              <Findwork />
              <WorkJob />
        </div>
    )
}
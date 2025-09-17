import Navigation from "./navigation"
import Timeline from "../components/Timeline.jsx"
import '../cssfiles/Experience.css'
import Orb from "../components/Orb.jsx"
import Footer from '../components/Footer.jsx'
function Experience(){
    return (
        <div>
            <Navigation whichpage="Experience"/>
       
            <Timeline />

            <Footer/>
        </div>
    )
}


export default Experience
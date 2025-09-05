import Navigation from "./navigation"
import Timeline from "../components/Timeline.jsx"
import '../cssfiles/Experience.css'
import Orb from "../components/Orb.jsx"
function Experience(){
    return (
        <div>
            <Navigation whichpage="Experience"/>
            <div style={{ width: '100%', height: '2000px', position: 'fixed', zIndex:0 ,paddingTop:'1%'}}>
                          <Orb
                            hoverIntensity={0}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                          />
                        </div>
            <Timeline />
        </div>
    )
}


export default Experience
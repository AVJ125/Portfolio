'use client'
import SplashCursor from "./Splashcursor"
import Orb from "./Orb"
export default function VisualFX(){
    return ( 
        <>
            {/* <SplashCursor /> */}
            <div style={{ width: '300%', height: '3000px', position: 'fixed', zIndex:'0',top:'0px',left:'0px' ,paddingTop:'1%'}}>
                <Orb
                hoverIntensity={0}
                rotateOnHover={false}
                hue={0}
                forceHoverState={false}
                />
            </div>
        </>
    )
}
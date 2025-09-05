import SplashCursor from "../components/Splashcursor"
import Navigation from "./navigation"
import TiltedCard from "../components/TiltedCard"
import Orb from "../components/Orb"
function Projects(){
    return (
        <div>
            <Navigation whichpage="Projects"/>
            <div style={{ width: '100%', height: '2000px', position: 'fixed', zIndex:0 ,paddingTop:'1%'}}>
              <Orb
                hoverIntensity={0}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>

             

<TiltedCard
  imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
  altText="Kendrick Lamar - GNX Album Cover"
  captionText="Kendrick Lamar - GNX"
  containerHeight="300px"
  containerWidth="300px"
  imageHeight="300px"
  imageWidth="300px"
  rotateAmplitude={12}
  scaleOnHover={1.2}
  showMobileWarning={false}
  showTooltip={true}
  displayOverlayContent={true}
  overlayContent={
    <p className="tilted-card-demo-text">
      Kendrick Lamar - GNX
    </p>
  }
/>
  
        </div>
    )
}


export default Projects
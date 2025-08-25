import '../cssfiles/About.css'

import Navigations from "./navigation"
function About(props) {
  
  return (
      <div>
        <Navigations whichpage="About" />
        
        <div className='image-container'>
          <div className="left">
            ANIKET JOSHI
          </div>

          <img src="public\shit_sunglare.jpg" alt="Me" class="image-slide" />


        </div>
        
        
      </div>
      
      

  )
  
}

export default About

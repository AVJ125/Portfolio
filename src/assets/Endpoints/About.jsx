import '../cssfiles/About.css'

import Navigations from "./navigation"
function About(props) {
  
  return (
      <div className='zilla-slab-light'>
        <Navigations whichpage="About" />
        
        <section className='image-container'>
          <div class="text">
              <p className='name'>ANIKET</p>
              <p className='surname'>JOSHI</p>

              <p>Software Engineer</p>
              <p>•Pune,Maharashtra,IND</p>

            </div>
          <img src="public\shit_sunglare.jpg" alt="Aniket Joshi" class="image" />
                    

        </section>
        
        
      </div>
      
      

  )
  
}

export default About

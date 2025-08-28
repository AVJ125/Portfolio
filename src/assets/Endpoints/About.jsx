
import '../cssfiles/About.css'
import SplashCursor from '../components/Splashcursor'
const coloor='white'


import Navigations from "./navigation"
function About(props) {
  
  return (
        <div className='zilla-slab-light main-container' style={{backgroundColor:`${coloor}`}}>
        <Navigations whichpage="About" coloor={coloor}/>
          <SplashCursor/>
        
        
        <section className='image-container' style={{color:`${coloor==='black'? 'white':'black'} `}}>
          <div className="text">
              <p className='name'>ANIKET JOSHI</p>

              <p>Software Engineer</p>
              <p>•Pune,Maharashtra,IND</p>

            </div>
          <img src="public\most-used.jpg" alt="Aniket Joshi" className="image" />
                    

        </section>
        
         
      
      

      




      </div>
      

  )
  
}

export default About









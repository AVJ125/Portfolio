import { Fluid } from '@whatisjery/react-fluid-distortion';
import { EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import '../cssfiles/About.css'



import Navigations from "./navigation"
function About(props) {
  
  return (
        <div className='zilla-slab-light'>
        <Canvas
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                height: '100vh',
                width: '100vw',
                background: 'rgba(0, 0, 0, 0) !important' ,
                zIndex: -1
            }}>
            <EffectComposer>
              
                <Fluid fluidColor='white'/>
        
          </EffectComposer>
      </Canvas>
        <Navigations whichpage="About" />
        
        <section className='image-container'>
          <div className="text">
              <p className='name'>ANIKET JOSHI</p>

              <p>Software Engineer</p>
              <p>•Pune,Maharashtra,IND</p>

            </div>
          <img src="public\most-used.jpg" alt="Aniket Joshi" className="image" />
                    

        </section>
        
          <section style={{ marginBottom: '2rem' , color:'white', padding:'0 10% 0 10%'}}>
        <h2 style={{ borderBottom: '2px solid #f4a261', paddingBottom: '.5rem', marginBottom: '1rem' }}>Background</h2>
        <p>
          {/* Replace with your background details */}
          I am a passionate software engineer based in Pune, Maharashtra with a strong foundation in computer science and a love for developing modern, responsive web applications.
        </p>
      </section>
      
      {/* Experience Summary Section */}
      <section style={{ marginBottom: '2rem' , color:'white',  padding:'0 10% 0 10%'}}>
        <h2 style={{ borderBottom: '2px solid #f4a261', paddingBottom: '.5rem', marginBottom: '1rem' }}>Experience</h2>
        <p>
          {/* Brief summary, with a link to detailed Experience tab */}
          I have worked on diverse projects ranging from front-end development to full-stack solutions using React, Node.js, and cloud technologies. For more details, please visit the Experience tab.
        </p>
      </section>

      {/* Skills Section */}
      <section style={{color:"white",  padding:'0 10% 0 10%'}}>
        <h2 style={{ borderBottom: '2px solid #f4a261', paddingBottom: '.5rem', marginBottom: '1rem' }}>Skills</h2>
        <ul style={{ listStyleType: 'square', paddingLeft: '1.2rem' }}>
          {/* List your skills */}
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Redux, Next.js</li>
          <li>Node.js, Express</li>
          <li>REST APIs, GraphQL</li>
          <li>HTML5, CSS3, Sass</li>
          <li>Database: MongoDB, PostgreSQL</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
      </section>




      </div>
      

  )
  
}

export default About









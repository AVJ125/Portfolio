import Carousel from '../components/Carousel'

import '../cssfiles/About.css'
import SplashCursor from '../components/Splashcursor'
import ScrollVelocity from '../components/ScrollVelocity'
const coloor='black'
import Orb from '../components/Orb.jsx'
import '../components/Footer'
import TextType from '../components/TextType';


import Navigations from "./navigation"
import Footer from '../components/Footer'
import { SiCss3, SiDjango, SiDocker, SiFastapi, SiFlask, SiGit, SiHtml5, SiJavascript, SiJenkins, SiKotlin, SiKubernetes, SiLinux, SiMongodb, SiPostgresql, SiPython, SiReact, SiShell, SiSqlite } from 'react-icons/si'
import { useRef } from 'react'
function About(props) {
  const aboutRef=useRef(null)
  const techStack=useRef(null);

  const handleAbout=()=>{
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
        <div className='zilla-slab-light main-container' style={{backgroundColor:`${coloor}`}}>
        <div className="curtain" style={{backgroundColor:`${coloor==='black'? 'black':'white'} `}}>
          <TextType 
            text={["Aniket Joshi"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter=""
          />
        </div>
        <div style={{ width: '100%', height: '2000px', position: 'fixed', zIndex:0 ,paddingTop:'1%'}}>
                      <Orb
                        hoverIntensity={0}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                      />
                    </div>
        <Navigations whichpage="About" coloor={coloor}/>
          
        
        
        <section className='image-container' style={{color:`${coloor==='black'? 'white':'black'} `}}>
          <div className="text">
              <p className='name'>ANIKET JOSHI</p>

              <p className='wrap-text'>Full Stack Developer.</p>
              <p>•Pune,Maharashtra,IND</p>
            <button class="cssbuttons-io-button">
              Know More
              <div class="icon" onClick={handleAbout}>
                <svg
                  height="19.2"
                  width="19.2"
                  viewBox="0 0 19.2 19.2"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                transform="rotate(90 12 12)"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>


            </div>
          <img src="most-used.jpg" alt="Aniket Joshi" className="image" />
                    

        </section>

        <div className="marquee-wrap" style={{}}>
        <ScrollVelocity
          texts={['Tech Stack     ★ About Me     ★    Tech Stack     ★ About Me     ★    Tech Stack     ★ About Me     ★    Tech Stack     ★ About Me     ★    Tech Stack     ★ About Me     ★    Tech Stack     ★ About Me     ★    Tech Stack     ★ About Me     ★']} 
          velocity='100' 

          className="custom-scroll-text-top zilla-slab-light"
          parallaxClassName="parallax layer layer--front"
          scrollerClassName="scroller scroller--pos"
          
        />
        <ScrollVelocity
          texts={['Tech Stack     ★ About Me     ★']} 
          velocity='100' 
          parallaxClassName="parallax layer layer--back"
          scrollerClassName="scroller scroller--neg"
          className="custom-scroll-text-bottom"
          
          />
          </div>



        <section ref={aboutRef} style={{ }} className='aboutMe'>
          <p style={{ borderBottom: '2px solid #ea00ff',borderTop:'2px solid #ea00ff',color:'white'

        }} className='aboutNameMain'>Background</p>
          <div className="aboutMeGrid">
            <div className='first' style={{width:'100%',paddingTop:'10%'}}>
              <p style={{color:'white'}} className='aboutP'>
                {/* Replace with your background details */}
                I'm Aniket Joshi, a software engineer with a strong focus on backend development and building applications. My experience at Qualys gave me hands-on exposure to APIs, monitoring tools, and automation that improved system uptime and reduced manual work. I’ve also worked on projects ranging from workflow automation at Mercedes Benz to developing Android and web applications, which has prepared me to take on full-time software development roles.
              </p>
              <p className="aboutP" style={{color:'white'}}>
      Outside of work, I enjoy building projects that solve real problems—like an Android and IOS app that helps reduce screen time and a social media app developed with a startup team. I like working on ideas end-to-end, from designing the solution to writing the code that makes it run.
            </p>
            
            </div>

            <div className='second' style={{ height: '480px', position: 'relative' }}>
              <Carousel
                baseWidth={240}
                autoplay={true}
                autoplayDelay={3000}
                pauseOnHover={true}
                loop={true}
                round={false}
              />
            </div>
          </div>
        
      </section>
      
      




      <section ref={techStack} style={{ }} className='TechStackk'>
          <p style={{ borderBottom: '2px solid #ea00ff',borderTop:'2px solid #ea00ff',color:'white'

        }} className='aboutNameMain'>Tech Stack</p>

      <section className='TechStack'>
        <div>
          <div className="common-row">
            <p className="column1">Languages & Frameworks</p >
            <div className="column2">
              <div className="tech-item"> <img height={'40px'} src="/svgs/python.svg" alt="" /><span>Python</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/javascript.svg" alt="" /><span>Javascript</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/kotlin.svg" alt="" /><span>Kotlin</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/java.svg" alt="" /><span>Java</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/mysql.svg" alt="" /><span>SQL</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/mongo.svg" alt="" /><span>Mongo</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/django.svg" alt="" /><span>Django</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/spring.svg" alt="" /><span>Spring</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/react.svg" alt="" /><span>React</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/postgres.svg" alt="" /><span>PostGres</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/html.svg" alt="" /><span>HTML</span> </div>
              <div className="tech-item"> <img height={'40px'} src="/svgs/css.svg" alt="" /><span>CSS</span> </div>





             
            </div>
          </div>
          <div className="common-row">
            <p className="column1">DevOps and Infrastucture</p>
            <div className="column2">
            
              <div className="tech-item"><img height={'40px'} src="/svgs/docker.svg" alt="" /> <span>Docker</span> </div>
              <div className="tech-item"><img height={'40px'} src="/svgs/jenkins.svg" alt="" /> <span>Jenkins</span> </div>
              <div className="tech-item"><img height={'40px'} src="/svgs/kubernetes.svg" alt="" /> <span>Kubernetes</span> </div>



            

            </div>
          </div>
          <div className="common-row">
            <p className="column1">Other Tools</p>
            <div className="column2">
              <div className="tech-item"><img height={'40px'} src="/svgs/git.svg" alt="" /> <span>GIT</span> </div>
              <div className="tech-item"><img height={'40px'} src="/svgs/powerauto.svg" alt="" /> <span>PowerAutomate</span> </div>
            

            </div>
          </div>
          

          <div className="common-row">
            <p className="column1">Currently Learning</p>
            <div className="column2">
              <div className="tech-item"><img height={'40px'} src="/svgs/flutter.svg" alt="" /> <span>Flutter</span> </div>
              <div className="tech-item"><img height={'40px'} src="/svgs/swift.svg" alt="" /> <span>Swift</span> </div>

            </div>
          </div>
            





        </div>
        </section>
        
      </section>
  
      

      <Footer/>


      </div>
      

  )
  
}

export default About









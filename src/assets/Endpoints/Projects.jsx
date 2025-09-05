import SplashCursor from "../components/Splashcursor"
import Navigation from "./navigation"
import TiltedCard from "../components/TiltedCard"
import Orb from "../components/Orb"
import NewProject from "../components/NewProject"
import '../cssfiles/Projects.css'

function Projects(){
  const projects = [
    {
      name: "Portfolio Website",
      imageSrc: "/projects/Portfolio.png",
      altText:'portfolio',
      techStack: ["React", "Three.js", "CSS"],
      pointsk: [
        "Developed an interactive portfolio with 3D animations",
        "Optimized for mobile and desktop",
        "Deployed on Vercel with CI/CD"
      ],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com",
      hasLive: true,
      containerHeight:'300px',
      containerWidth:'80%',
      scaleOnHover:'1.2',
      rotateAmplitude:'10'
    },
    {
      name: "Phishing Website Detection using AI/ML",
      imageSrc: "/projects/phishing.png",
      altText:'phishing',
      techStack: ["React", "Three.js", "CSS"],
      pointsk: [
        "Developed an interactive portfolio with 3D animations",
        "Optimized for mobile and desktop",
        "Deployed on Vercel with CI/CD"
      ],
      githubLink: "https://github.com/yourusername/portfolio",
      liveLink: "https://yourportfolio.com",
      hasLive: true,
      containerHeight:'300px',
      containerWidth:'80%',
      scaleOnHover:'1.2',
      rotateAmplitude:'10'
    }
  ];




    return (
        <div>
            <Navigation whichpage="Projects"/>
            <div style={{ width: '100%', height: '2000px', position: 'fixed', zIndex:'-2' ,paddingTop:'1%'
            }}>
              <Orb
                hoverIntensity={0}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>

             <div className="ProjectSection">
              <h1>My Projects</h1>
              {projects.map((proj, index) => (
                <div className="indiProject">

                  <NewProject key={index} project={proj} />
                </div>
              ))}
            </div>
        
          




        </div>
    )
}


export default Projects
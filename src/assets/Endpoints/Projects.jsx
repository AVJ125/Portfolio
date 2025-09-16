import SplashCursor from "../components/Splashcursor"
import Navigation from "./navigation"
import TiltedCard from "../components/TiltedCard"
import Orb from "../components/Orb"
import NewProject from "../components/NewProject"
import Footer from '../components/Footer'
import '../cssfiles/Projects.css'
import { div } from "motion/react-client"
import React,{useState,useEffect} from 'react';
function useScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

function Projects(){
  const width = useScreenWidth();

  const scale = width <= 768 ? 0 : 1.2;

  const projects = [
    {
      name: "Portfolio Website",
      imageSrc: "/projects/Portfolio.png",
      altText:'portfolio',
      techStack: ["React.js", "Three.js", "CSS", "Vercel (CI/CD)", "GitHub"],
      pointsk: [
        "Built a responsive portfolio website with React.js showcasing projects and skills.",
        "Integrated Three.js for interactive 3D visuals and engaging UI.",
        "Automated CI/CD deployment using GitHub + Vercel for seamless updates.",
        "Applied modern CSS design principles (gradients, animations, responsiveness).",
      ],
      githubLink: "https://github.com/AVJ125/Portfolio",
      liveLink: "https://aniketjoshi2002.vercel.app",
      hasLive: true,
      containerHeight:'fit-content',
      containerWidth:'80%',
      scaleOnHover:`${scale}`,
      rotateAmplitude:'10'
    },
    {
      name: "Phishing Website Detection using AI/ML",
      imageSrc: "/projects/phishing.png",
      altText:'phishing',
      techStack: ["Python", "XGBoost", "Scikit-learn", "Flask", "BeautifulSoup", "WHOIS", "Jupyter"],
      pointsk: [
        "Designed and trained a model using XGBoost to detect phishing URLs based on extracted URL features. ",
        "Implemented feature extraction scripts (e.g. URLFeatureExtraction.py, expired.py, self-signed.py) to gather relevant indicators like expiration, SSL status, domain age, etc.",
        "Created interactive front-end interface (via index.py + templates) for users to input a URL and get predictions of phishing vs safe. ",
        "Packaged the trained model (XGBoostClassifier.pickle.dat) for deployment, enabling quick inference without retraining each time. ",
        "Documented experiments and results in Jupyter Notebooks (MODEL_TRAINING.ipynb, MODELLAST.ipynb) for transparency and reproducibility.",
      ],
      githubLink: "https://github.com/AVJ125/PhishingDetection-using-AI-ML",
      liveLink: "https://yourportfolio.com",
      hasLive: false,
      containerHeight:'fit-content',
      containerWidth:'80%',
      scaleOnHover:`${scale}`,
      rotateAmplitude:'10',
    },
     {
      name: "FAM Social Media App Development",
      imageSrc: "/projects/fam.png",
      altText:'fam',
      techStack: ["ReactNative", "Express.js", "CSS","JavaScript","PostgresSQL"],
      pointsk: [
        "Built an anonymous social platform that lets users join chatrooms and share feelings without revealing identity.",
        "Designed for peer support and emotional venting, helping users connect with like-minded individuals.",
        "Implemented private messaging features for ongoing connections beyond group rooms.",
        "Focused on privacy and safety, with encrypted data transmission and moderation tools.",
      ],
      githubLink: "https://github.com/AVJ125/fam-backend/tree/master",
      liveLink: "https://play.google.com/store/apps/details?id=com.fam.famapp&pcampaignid=web_share",
      hasLive: true,
      containerHeight:'fit-content',
      containerWidth:'80%',
      scaleOnHover:`${scale}`,
      rotateAmplitude:'10'
    },
     {
      name: "Dopamine Detox Android Application",
      imageSrc: "/projects/dopaminedetox.png",
      altText:'dopaminedetox',
      techStack: ["Kotlin","AndroidSDK","Jetpack Components","Gradle","Android Studio","ADB Emulator/Physical Device"],
      pointsk: [
          "Built an Android dopamine detox app in Kotlin to help users track and limit distracting app usage, promoting digital wellness.",
          "Implemented screen time monitoring and usage thresholds with system-level APIs for accurate app tracking.",
          "Developed detox scheduling and blocking features using Jetpack’s WorkManager and Alarm Manager for background tasks.",
          "Integrated custom notifications and alerts to warn users when approaching or exceeding usage limits.",
          "Designed a clean and minimal UI with flexible settings for app whitelisting/blacklisting and personalized detox plans.",
      ],
      githubLink: "https://github.com/AVJ125/DopaminDetox/tree/BeforeImpUIchanges",
      liveLink: "https://yourportfolio.com",
      hasLive: false,
      containerHeight:'fit-content',
      containerWidth:'80%',
      scaleOnHover:`${scale}`,
      rotateAmplitude:'10'
    },
     {
      name: "Biometric Face Detection",
      imageSrc: "/projects/biometric.png",
      altText:'biometric',
      techStack: ["Python" , "OpenCV ", "PyAutoGUI ", "Windows API"],
      pointsk: [
        "Engineered a webcam-based auto-lock application in Python using OpenCV for real-time face detection, improving desktop security by automatically locking when no user is detected.",
        "Automated system-level interactions with PyAutoGUI, including Windows Run commands and keystroke simulations, to handle both lock and unlock sequences.",
        "Designed and optimized frame-threshold logic to reduce false triggers, ensuring stability across varying lighting conditions and camera qualities.",
        "Exposed configurable parameters (timeouts, camera index, detection sensitivity) for adaptability in different environments and user needs.",
        "Delivered a lightweight, cross-disciplinary project showcasing the integration of computer vision with operating system automation.",
      ],
      githubLink: "https://github.com/AVJ125/BiometricFaceDetection",
      liveLink: "https://yourportfolio.com",
      hasLive: false,
      containerHeight:'fit-content',
      containerWidth:'80%',
      scaleOnHover:`${scale}`,
      rotateAmplitude:'10'
    },
     {
      name: "Medimate",
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
      containerHeight:'fit-content',
      containerWidth:'80%',
      scaleOnHover:`${scale}`,
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
              
              {projects.map((proj, index) => (
                

                  <NewProject key={index} project={proj}  />
                
              ))}
            </div>
        
          



        </div>
    )
}


export default Projects
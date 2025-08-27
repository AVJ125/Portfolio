// Install react-icons with: npm install react-icons
import Tooltip from '../components/tooltip';
import React from 'react';
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin ,FaFile} from 'react-icons/fa';
const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};
const github=<FaGithub  onClick={()=>{openInNewTab("https://github.com/AVJ125")}}  title='Github' style={{ fontSize: '2rem', color: '#ffffffff', cursor: 'pointer' }} />
const instagram=<FaInstagram onClick={()=>{openInNewTab("https://www.instagram.com/avj125")}} title='Instagram' style={{ fontSize: '2rem', color: '#ffffffff', cursor: 'pointer' }} />
const resume=<FaFile onClick={()=>{openInNewTab("https://drive.google.com/file/d/14St5yimqGdCan1tYC1CQ-MKFCdu-gM-m/view?usp=sharing")}} title='Resume' style={{ fontSize: '2rem', color: '#ffffffff', cursor: 'pointer' }} /> 
const linkedin=<FaLinkedin onClick={()=>{openInNewTab("https://www.linkedin.com/in/aniket-joshi-1b18271ba/")}} title='LinkedIn' style={{ fontSize: '2rem', color: '#ffffffff', cursor: 'pointer' }} />
   
const Sidebar = () => (
  <div style={{
    position: 'fixed',
    right: 0,
    background: 'transparent',
    padding: '1rem 0.5rem',
    display: 'flex',
    transform:'translateY(-16%)',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '1.5rem',
    height: '350px', // adjust height as needed
  }}>
    <div style={{
      borderLeft: '2px solid #ffffffff',
      height: '60px',
      paddingRight:'1rem',
      marginTop: '1rem'
    }} />

    <Tooltip imagehover="public/linkedin.png" butt={linkedin} />
    <Tooltip imagehover="public/instagram.png" butt={instagram} />
    <Tooltip imagehover="public/resume.png" butt={resume} />
    <Tooltip imagehover="public/github.png" butt={github} />



    
 {/* Optional: Add a line at the bottom */}
  </div>
);

export default Sidebar;

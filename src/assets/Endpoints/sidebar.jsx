// Install react-icons with: npm install react-icons
import React from 'react';
import { FaGithub, FaYoutube, FaInstagram, FaTwitter, FaLinkedin ,FaFile, FaGoogle} from 'react-icons/fa';
const openInNewTab = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
};

function Sidebar(props){
  const iconcolor=`${props.coloor==='black'? 'white':'black'} `








  return (

    <div style={{
      position: 'fixed',
      right: 0,
      top:0,
      background: 'transparent',
      padding: '1rem 0.5rem',
      display: 'flex',
    transform:'translateY(-16%)',
    flexDirection: 'column',
    alignItems: 'end',
    gap: '1.5rem',
    zIndex:50,
    height: '280px', // adjust height as needed
  }}>
    <div style={{
      borderLeft: `2px solid ${iconcolor}`,
      height: '48px',
      paddingRight:'1rem',
      marginTop: '1rem'
    }} />
    <FaGithub  onClick={()=>{openInNewTab("https://github.com/AVJ125")}}  title='Github' style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }} /> 
   <FaLinkedin onClick={()=>{openInNewTab("https://www.linkedin.com/in/aniket-joshi-1b18271ba/")}} title='LinkedIn' style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }} />
    <FaGoogle onClick={()=>{openInNewTab("mailto:aniketjoshi2002@gmail.com")}}  title='Github' style={{ fontSize: '2rem', color: 'white', cursor: 'pointer' }} /> 



    
 {/* Optional: Add a line at the bottom */}
  </div>)
}

export default Sidebar;

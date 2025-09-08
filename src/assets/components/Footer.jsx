import React from "react";
import "../cssfiles/footer.css";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate=useNavigate()
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Branding / Name */}
        <div className="footer-left">
          <h3>Aniket Joshi</h3>
          <p>Full-Stack Developer</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-center">
          <a onClick={()=>{navigate('/')}}>About</a>
          <a onClick={()=>{navigate('/projects')}}>Projects</a>
          <a onClick={()=>{navigate('/experience')}}>Experience</a>
          
        </div>

        {/* Social Links */}
        <div className="footer-right">
          <a href="https://github.com/AVJ125" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aniket-joshi-1b18271ba/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:aniketjoshi2002@gmail.com">Email</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Aniket Joshi. All rights reserved.</p>
      </div>
    </footer>
  );
}

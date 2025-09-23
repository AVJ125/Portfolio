import React from 'react';
import './ProfileCard.css';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaLinkedinIn,
  
} from 'react-icons/fa';

const styles = {
  wrapper: {
    
    boxSizing: 'border-box',
    background: 'transparent',
    minHeight: '100vh',
    
    paddingLeft:'5%',
    paddingRight:'5%',
    display: 'flex',
    justifyContent: 'center',
    fontFamily: "'Zilla Slab', 'serif'", fontWeight: '240', fontStyle: 'normal'
  },
  

  container: {
    display: 'flex',
    flexDirection: 'row',
    
    maxWidth: '1100px',
    width: '100%',
    color: '#EAEAEA',
    fontFamily: 'Segoe UI, sans-serif',
    alignItems: 'flex-start',
    justifyContent: 'center',
    gap:'10%'
  },

  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
    maxWidth: '400px',
  },

  avatar: {
    width: '180px',
    height: '180px',
    borderRadius: '16px',
    objectFit: 'cover',
  },

  name: {
    fontSize: '1.8rem',
    
    color: '#fff',
  },

  role: {
    fontSize: '1rem',
    color: '#AAAAAA',
  },

  location: {
    fontSize: '0.9rem',
    color: '#CCCCCC',
  },

  socialIcons: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.8rem',
    flexWrap: 'wrap',
  },

  iconLink: {
    backgroundColor: '#2A2A2A',
    padding: '0.5rem',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '36px',
    height: '36px',
  },

  divider: {
    width: '2px',
    height: '500px',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderRadius: '1px',
  },

  rightColumn: {
    maxWidth: '500px',
    color: '#EAEAEA',
    paddingTop:'7%'
  },

  aboutTitle: {
    fontSize: '1.6rem',
    marginBottom: '1rem',
    borderBottom: '2px solid #ff00eaff',
    display: 'inline-block',
    paddingBottom: '0.3rem',
  },

  aboutText: {
    fontSize: '0.95rem',
    lineHeight: '1.7',
    color: '#CCCCCC',
  },
  zillaslablight: {
  
}
};

const ProfileCard = () => {
return (
    <div style={styles.wrapper } className="ProfileCardComp">
        <div style={styles.container}>
            {/* LEFT */}
            <div style={styles.leftColumn}>
                <img
                    src="most-used.jpg"
                    alt="Profile Avatar"
                    style={styles.avatar}
                />

                <p style={styles.name} className="zilla-slab-light" >ANIKET JOSHI</p>
                <p style={styles.role}>Full Stack Developer.</p>
                <p style={styles.location}>Pune, Maharashtra, IND</p>

                <div style={styles.socialIcons}>
                     <a href="https://www.linkedin.com/in/aniketjoshi2002/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
                            <FaLinkedin size={24} color="#fff" />
                    </a>
                    <a href="https://www.geeksforgeeks.org/user/aniketjoshi2002/" style={styles.iconLink}>
                        <img
                            src="/GFG.svg"
                            alt="LeetCode"
                            style={{ width: '18px', height: '18px'}}
                        />
                    </a>
                    <a href="https://leetcode.com/u/avj125/" style={styles.iconLink}>
                        <img
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg"
                            alt="LeetCode"
                            style={{ width: '18px', height: '18px'}}
                        />
                    </a>
                    <a href="https://takeuforward.org/profile/AVJ125" style={styles.iconLink}>
                        <img
                            src="https://takeuforward.org/static/media/TufPlusLight.041fc694d612b3fbaaa0.png"
                            alt="TUF"
                            style={{ width: '18px' }}
                        />
                    </a>
                </div>
            </div>

            {/* DIVIDER LINE */}
            <div style={styles.divider} />

            {/* RIGHT */}
            <div style={styles.rightColumn}>
                <p style={styles.aboutTitle}>About Me</p>
                <p style={styles.aboutText}>
                    Software Engineer  with 300+ DSA problems solved across LeetCode, GFG, and TUF. Skilled in building full-stack applications using Django, React, and Spring Boot ,Kotlin. 
                </p>
                <p style={styles.aboutText}>
                    Currently working as a Software Engineer at Qualys, with over 2+ years of experience.
                </p>


                <button class="cssbuttons-io-button" onClick={() => window.open('https://drive.google.com/file/d/131fPn235t5gCUSbkX6HB3BPXgIuQovOG/view', '_blank')}>
              Resume
              <div class="icon" >
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
        </div>
    </div>
);
};

export default ProfileCard;

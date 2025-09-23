// IntroSlide.jsx
import React, { useState, useEffect } from 'react';
import './IntroSlide.css';

const IntroSlide = ({ name = "YOUR NAME" }) => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Duration should match your CSS animation time
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000); // 3 seconds, tweak as needed

    return () => clearTimeout(timer);
  }, []);

  if (!showIntro) return null;

  return (
    <div className="intro-container">
      <p className="intro-name">{name}</p>
    </div>
  );
};

export default IntroSlide;

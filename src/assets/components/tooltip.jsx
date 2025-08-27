import React, { useState } from 'react';

const PreviewTooltip = ({ previewImage, previewUrl, children ,zin}) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setVisible(true);
  };

  const handleMouseMove = (e) => {
    setPos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  return (
    <div 
      style={{ display: 'inline-block', position: 'relative' }} 
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    
>
      {children}

      {visible && (
        <div style={{
        top: pos.y,
          left: pos.x - 320,  // Adjust left to position tooltip on the left side
          zIndex:4000,
          width: '300px',
          height: '200px',
          backgroundColor: '#ffffffff',
          border: '1px solid #ff0000ff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
          {
            <img 
              src={previewImage} 
              alt="Preview" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          }
        </div>
      )}
    </div>
  );
};

export default function Tooltip(props) {
  return (
    <div style={{ }}>
      <PreviewTooltip 
        previewImage={props.imagehover}
        zin={'4000'}
      >
        {props.butt}
      </PreviewTooltip>
    </div>
  );
}

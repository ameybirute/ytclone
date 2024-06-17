import React, { useState } from 'react';
import ytv from './ytv.png';
import ytm from './ytm.png';
import './App.css';
import Button from './Mainbutton.js';

function App() {
  const [imageSrc, setImageSrc] = useState(ytv);

  const handleMouseEnterButton1 = () => {
    setImageSrc(ytv);
  };

  const handleMouseEnterButton2 = () => {
    setImageSrc(ytm);
  };

  return (
    <div className="container">
      <img style={{ height: "120px",width:"120px" }} src={imageSrc} alt="Logo" />
      <Button onMouseEnter={handleMouseEnterButton1} label="YT Video" />
      <Button onMouseEnter={handleMouseEnterButton2} label="YT Music" />
    </div>
  );
}

export default App;

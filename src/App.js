import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import ytv from './ytv.png';
import ytm from './ytm.png';
import './App.css';
import Button from './Mainbutton';
import SearchPage from './SearchPage';

function HomePage() {
  const [imageSrc, setImageSrc] = React.useState(ytv);
  const navigate = useNavigate();

  const handleMouseEnterButton1 = () => {
    setImageSrc(ytv);
  };

  const handleMouseEnterButton2 = () => {
    setImageSrc(ytm);
  };

  return (
    <div className="container">
      <img style={{ height: '120px', width: '120px' }} src={imageSrc} alt="Logo" />
      <Button onMouseEnter={handleMouseEnterButton1} onClick={() => navigate('/search/video')} label="YT Video" />
      <Button onMouseEnter={handleMouseEnterButton2} onClick={() => navigate('/search/music')} label="YT Music" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search/:type" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;

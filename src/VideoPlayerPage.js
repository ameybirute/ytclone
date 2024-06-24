import React from 'react';
import { useLocation } from 'react-router-dom';

const VideoPlayerPage = () => {
  const location = useLocation();
  const { videoUrl } = location.state;

  return (
    <div className="video-player-page">
      <h2>Video Player</h2>
      <div className="video-container">
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${videoUrl}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayerPage;

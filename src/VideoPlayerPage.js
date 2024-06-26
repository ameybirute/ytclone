import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './VideoPlayerPage.css';

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const location = useLocation();

  return (
    <div className="video-player-page">
      <div className="video-container">
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoPlayerPage;

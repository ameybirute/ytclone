import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VideoPlayerPage.css';
import { getRelatedVideos } from './youtubeApi'; // Correct import
import VideoItem from './VideoItem';

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        const videos = await getRelatedVideos(videoId);
        setRelatedVideos(videos);
      } catch (error) {
        console.error('Error fetching related videos:', error);
      }
    };

    fetchRelatedVideos();
  }, [videoId]);

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
      <div className="recommendations">
        {relatedVideos.map((item) => (
          <VideoItem key={item.id.videoId || item.id} item={item.snippet} />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerPage;

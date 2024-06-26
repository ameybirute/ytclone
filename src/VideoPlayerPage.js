import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRelatedVideos } from './youtubeApi'; // Import your API function for fetching related videos
import VideoItem from './VideoItem'; // Import VideoItem for recommendations
import './VideoPlayerPage.css';

const VideoPlayerPage = () => {
  const { videoId } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    const fetchRelatedVideos = async () => {
      try {
        const related = await getRelatedVideos(videoId);
        setRelatedVideos(related);
      } catch (err) {
        console.error('Failed to fetch related videos:', err);
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
      <div className="related-videos">
        {relatedVideos.map((item) => (
          <VideoItem key={item.id.videoId || item.id} item={item} onClick={() => window.location.href = `/video/${item.id.videoId || item.id}`} />
        ))}
      </div>
    </div>
  );
};

export default VideoPlayerPage;

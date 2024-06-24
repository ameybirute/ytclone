import React from 'react';
import { Link } from 'react-router-dom';
import './VideoItem.css';

const VideoItem = ({ item }) => {
  if (!item || !item.thumbnails) {
    return null;
  }

  // Use high-resolution thumbnail
  const thumbnailUrl = item.thumbnails.high.url || item.thumbnails.medium.url || item.thumbnails.default.url;

  return (
    <Link to={{ pathname: `/watch/${item.id}`, state: { videoUrl: item.videoUrl } }} className="video-item-link">
      <div className="video-item">
        <img src={thumbnailUrl} alt={item.title} />
        <div className="video-details">
          <p className="video-title">{item.title}</p>
          <p className="video-author">{item.channelTitle}</p>
          <p className="video-views">{item.viewCount} views</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoItem;

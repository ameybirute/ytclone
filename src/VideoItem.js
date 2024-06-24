import React from 'react';
import './VideoItem.css';

const VideoItem = ({ item }) => {
  if (!item || !item.thumbnails) {
    return null;
  }

  return (
    <div className="video-item">
      <img src={item.thumbnails.high.url} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default VideoItem;

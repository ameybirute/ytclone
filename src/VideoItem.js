import React from 'react';
import './VideoItem.css';

const VideoItem = ({ item, onClick }) => {
  const { title, thumbnails, channelTitle } = item;

  return (
    <div className="video-item" onClick={onClick}>
      <img src={thumbnails.high.url} alt={title} />
      <div className="video-details">
        <div className="video-title">{title}</div>
        <div className="video-meta">{channelTitle}</div>
      </div>
    </div>
  );
};

export default VideoItem;

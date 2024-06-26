import React from 'react';
import './VideoItem.css';

const VideoItem = ({ item, onClick }) => {
  if (!item || !item.snippet) {
    return null;
  }

  return (
    <div className="video-item" onClick={onClick}>
      <img src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
      <div className="video-details">
        <p className="video-title">{item.snippet.title}</p>
        <p className="video-author">{item.snippet.channelTitle}</p>
        <p className="video-views">{item.snippet.viewCount} views</p>
      </div>
    </div>
  );
};

export default VideoItem;

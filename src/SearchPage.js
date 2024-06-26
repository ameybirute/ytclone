import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import VideoItem from './VideoItem';
import { searchVideos, getTrendingVideos } from './youtubeApi';

const SearchPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const trendingVideos = await getTrendingVideos();
        setVideos(trendingVideos);
      } catch (err) {
        setError('Failed to fetch trending videos.');
      }
    };
    fetchTrendingVideos();
  }, []);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const results = await searchVideos(query);
      setVideos(results);
      setError('');
    } catch (err) {
      console.error('Error during search:', err.response ? err.response.data : err.message);
      setError('Failed to search videos. Please check your network or API key.');
    }
  };

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  return (
    <div className="search-page">
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for videos or music..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="video-list">
        {videos.map((item) => (
          <VideoItem key={item.id.videoId || item.id} item={item} onClick={() => handleVideoClick(item.id.videoId || item.id)} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

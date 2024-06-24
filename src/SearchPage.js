import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SearchPage.css';
import VideoItem from './VideoItem';
import { searchVideos, getTrendingVideos } from './youtubeApi';

const SearchPage = () => {
  const { type } = useParams();
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState('');
  const [searchPerformed, setSearchPerformed] = useState(false);

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
    setSearchPerformed(true);
    try {
      const results = await searchVideos(query);
      setVideos(results);
      setError('');
    } catch (err) {
      console.error('Error during search:', err.response ? err.response.data : err.message);
      setError('Failed to search videos. Please check your network or API key.');
    }
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
      <div className={`video-list ${searchPerformed ? 'vertical-list' : ''}`}>
        {videos.map((item) => (
          <VideoItem key={item.id.videoId || item.id} item={item.snippet} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;

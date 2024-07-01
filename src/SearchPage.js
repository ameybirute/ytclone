import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './SearchPage.css';
import VideoItem from './VideoItem';
import { searchVideos, getTrendingVideos } from './youtubeApi'; // Import your API functions
import { IoMdMenu } from 'react-icons/io';

const SearchPage = () => {
  const { type } = useParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [videos, setVideos] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false);
  const [error, setError] = useState('');
  const [isSidebarVisible, setIsSidebarVisible] = useState(true); // Initially visible on PC

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
      setSearchClicked(true);
      setError('');
    } catch (err) {
      console.error('Error during search:', err.response ? err.response.data : err.message);
      setError('Failed to search videos. Please check your network or API key.');
    }
  };

  const handleVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`search-page ${isSidebarVisible ? '' : 'sidebar-hidden'}`}>
      <div className="menu-icon" onClick={toggleSidebar}>
        <IoMdMenu />
      </div>
      <div className={`sidebar ${isSidebarVisible ? 'expanded' : ''}`}>
        <h2>Explore</h2>
        <ul>
          <li><i className="fas fa-fire"></i> Trending</li>
          <li><i className="fas fa-shopping-cart"></i> Shopping</li>
          <li><i className="fas fa-music"></i> Music</li>
          <li><i className="fas fa-film"></i> Movies</li>
          <li><i className="fas fa-signal"></i> Live</li>
          <li><i className="fas fa-gamepad"></i> Gaming</li>
          <li><i className="fas fa-newspaper"></i> News</li>
          <li><i className="fas fa-basketball-ball"></i> Sports</li>
          <li><i className="fas fa-graduation-cap"></i> Courses</li>
          <li><i className="fas fa-tshirt"></i> Fashion & Beauty</li>
          <li><i className="fas fa-podcast"></i> Podcasts</li>
        </ul>
      </div>
      <div className="content">
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
        <div className={`video-list ${searchClicked ? 'vertical' : ''}`}>
          {videos.map((item) => (
            <VideoItem key={item.id.videoId || item.id} item={item.snippet} onClick={() => handleVideoClick(item.id.videoId || item.id)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

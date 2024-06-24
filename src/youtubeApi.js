import axios from 'axios';

const API_KEY = 'AIzaSyDL5uwiUwR5R9D-BhqhVqK7bcf3rM1wxms';

export const searchVideos = async (query) => {
  const params = {
    part: 'snippet',
    maxResults: 40,
    q: query,
    type: 'video',
    key: API_KEY,
  };

  try {
    console.log('Request params:', params);
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', { params });
    return response.data.items;
  } catch (error) {
    console.error('Error searching videos:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export const getTrendingVideos = async () => {
  const params = {
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 40,
    regionCode: 'US',
    key: API_KEY,
  };

  try {
    console.log('Request params:', params);
    const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', { params });
    return response.data.items;
  } catch (error) {
    console.error('Error fetching trending videos:', error.response ? error.response.data : error.message);
    throw error;
  }
};

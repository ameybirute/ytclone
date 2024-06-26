import axios from 'axios';

const API_KEY = 'AIzaSyDL5uwiUwR5R9D-BhqhVqK7bcf3rM1wxms';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const searchVideos = async (query) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: 10,
      key: API_KEY,
    },
  });
  return response.data.items;
};

export const getTrendingVideos = async () => {
  const response = await axios.get(`${BASE_URL}/videos`, {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      maxResults: 10,
      regionCode: 'US',
      key: API_KEY,
    },
  });
  return response.data.items;
};

export const getRelatedVideos = async (videoId) => {
  const response = await axios.get(`${BASE_URL}/search`, {
    params: {
      part: 'snippet',
      relatedToVideoId: videoId,
      type: 'video',
      maxResults: 10,
      key: API_KEY,
    },
  });
  return response.data.items;
};
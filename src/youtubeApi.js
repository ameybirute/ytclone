import axios from 'axios';

const API_KEY = 'AIzaSyDL5uwiUwR5R9D-BhqhVqK7bcf3rM1wxms';
export const searchVideos = async (query) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      q: query,
      key: API_KEY,
      type: 'video',
    },
  });
  return response.data.items;
};

export const getTrendingVideos = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
    params: {
      part: 'snippet',
      chart: 'mostPopular',
      key: API_KEY,
      maxResults: 20,
    },
  });
  return response.data.items;
};

export const getRelatedVideos = async (videoId) => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      relatedToVideoId: videoId,
      key: API_KEY,
      type: 'video',
    },
  });
  return response.data.items;
};
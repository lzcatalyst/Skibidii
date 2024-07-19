import axios from 'axios';

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

export const getSpotifyToken = async () => {
  const tokenUrl = 'https://accounts.spotify.com/api/token';
  const response = await axios.post(tokenUrl, 'grant_type=client_credentials', {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
    }
  });
  return response.data.access_token;
};
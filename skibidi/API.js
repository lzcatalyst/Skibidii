import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Sesuaikan dengan URL backend Anda

export const getSongs = () => axios.get(`${API_URL}/songs`);
export const searchSongs = (query) => axios.get(`${API_URL}/search`, { params: { q: query } });

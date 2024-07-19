const fetch = require('node-fetch');

const url = 'https://theaudiodb.p.rapidapi.com/searchalbum.php?s=daft_punk';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '26984c3984msh313982e86f51624p173837jsn6a7951c3a9bc',
    'x-rapidapi-host': 'theaudiodb.p.rapidapi.com'
  }
};

export const fetchAudioDBData = async () => {
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result.album;
  } catch (error) {
    console.error('Error fetching data from TheAudioDB:', error);
    throw error;
  }
};
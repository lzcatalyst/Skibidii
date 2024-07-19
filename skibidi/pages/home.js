import React, { useState, useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import SongList from '../components/SongList';
import { PlayerContext } from '../context/PlayerContext';
import { fetchAudioDBData } from '../utils/fetchAudioDBData';

export default function Home() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setCurrentSong } = useContext(PlayerContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const albums = await fetchAudioDBData();
        console.log('Albums:', albums); // Tambahkan log ini
        const formattedSongs = albums.map(album => ({
          id: album.idAlbum,
          title: album.strAlbum,
          artist: album.strArtist,
          image: album.strAlbumThumb || 'https://via.placeholder.com/100'
        }));
        console.log('Formatted Songs:', formattedSongs); // Tambahkan log ini
        setSongs(formattedSongs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSongPress = (song) => {
    setCurrentSong(song);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jump back in</Text>
        <SongList songs={songs} onSongPress={handleSongPress} />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Gelombang Alternatif</Text>
        <SongList songs={songs} onSongPress={handleSongPress} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
});
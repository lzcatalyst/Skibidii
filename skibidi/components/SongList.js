import React from 'react';
import { View, StyleSheet } from 'react-native';
import SongCard from './SongCard';

export default function SongList({ songs, onSongPress }) {
  return (
    <View style={styles.container}>
      {songs.map(song => (
        <SongCard key={song.id} song={song} onPress={onSongPress} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
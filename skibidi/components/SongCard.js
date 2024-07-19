import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function SongCard({ song, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(song)}>
      <Image source={{ uri: song.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{song.title}</Text>
        <Text style={styles.artist}>{song.artist}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#333',
    marginBottom: 10,
    borderRadius: 5,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  info: {
    marginLeft: 10,
  },
  title: {
    color: '#fff',
    fontSize: 16,
  },
  artist: {
    color: '#888',
    fontSize: 14,
  },
});
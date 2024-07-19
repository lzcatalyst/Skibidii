import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { PlayerContext } from '../context/PlayerContext';

export default function Player() {
  const { currentSong } = useContext(PlayerContext);

  if (!currentSong) {
    return null; // Atau tampilkan placeholder jika tidak ada lagu yang dipilih
  }

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: currentSong.image }} // Ganti dengan URL gambar album
          style={styles.albumArt}
        />
        <View style={styles.songInfo}>
          <Text style={styles.songTitle}>{currentSong.title}</Text>
          <Text style={styles.artistName}>{currentSong.artist}</Text>
        </View>
      </View>
      <View style={styles.centerContainer}>
        <View style={styles.controls}>
          <TouchableOpacity>
            <MaterialIcons name="skip-previous" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome name="play-circle" size={48} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="skip-next" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity>
          <MaterialIcons name="queue-music" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="devices" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="volume-up" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#444',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  songInfo: {
    marginLeft: 10,
  },
  songTitle: {
    color: '#fff',
    fontSize: 16,
  },
  artistName: {
    color: '#888',
    fontSize: 14,
  },
  centerContainer: {
    flex: 1,
    alignItems: 'center',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '40%',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
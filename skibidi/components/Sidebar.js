import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Sidebar() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }} // Ganti dengan URL ikon jeruk
          style={styles.icon}
        />
        <Text style={styles.title}>Orangefy</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <Text style={styles.text}>Search</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Library')}>
        <Text style={styles.text}>Your Library</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: '#333',
    padding: 10,
    marginTop: 50, // Menambahkan margin atas untuk menggeser ke bawah
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Menambahkan margin bawah untuk memberi jarak dengan item menu
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginVertical: 10,
  },
});
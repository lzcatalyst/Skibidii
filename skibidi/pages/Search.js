import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
  },
  text: {
    color: '#fff',
  },
});
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './pages/home';
import Library from './pages/Library';
import Playlist from './pages/Playlist';
import Search from './pages/Search';
import Navbar from './components/Navbar';
import Player from './components/Player';
import { View, StyleSheet } from 'react-native';
import { PlayerProvider } from './context/PlayerContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PlayerProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <View style={styles.mainContent}>
            <Tab.Navigator tabBar={props => <Navbar {...props} />}>
              <Tab.Screen name="Home" component={Home} />
              <Tab.Screen name="Library" component={Library} />
              <Tab.Screen name="Playlist" component={Playlist} />
              <Tab.Screen name="Search" component={Search} />
            </Tab.Navigator>
          </View>
          <Player />
        </View>
      </NavigationContainer>
    </PlayerProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
  },
});
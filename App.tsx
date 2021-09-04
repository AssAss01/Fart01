import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const audio = new Audio("Recording.m4a");

  const playSound = () => {
      audio.play()
  
  }
   return
  
  (
    <View style={styles.container}>
      <Text>Fart Activated!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity
        onPress={playSound}
      >
        <Image
        style={styles.stretch}
        source={require('./assets/fatasspic.jpg')}
      />
      </TouchableOpacity> 
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});


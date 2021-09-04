import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {

  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log('Loading Sound');
    const { sound: sounds } = await Audio.Sound.createAsync(
       require('./assets/Recording.m4a')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sounds.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound?.unloadAsync(); }
      : undefined;
  }, [sound]);


  
  return (
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


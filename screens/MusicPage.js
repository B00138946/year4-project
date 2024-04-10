import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ImageBackground, Image} from 'react-native'
import { Audio } from 'expo-av';
import { useNavigation } from '@react-navigation/native';


const MusicPage = () => {
  const navigation = useNavigation()
  const [sound, setSound] = useState()
  
  const navigateBack = () => {
    navigation.navigate('Settings');
  };

//Music Function
async function playSound() {
  console.log('Loading Sound');
  const { sound } = await Audio.Sound.createAsync( require('../Audio/music.mp3')
  );
  setSound(sound);

  console.log('Playing Background Music');
  await sound.playAsync();
}
const stopSound = async () => {
  if (sound) {
    console.log('Stopping Background Music');
    await sound.stopAsync();
  }
};



useEffect(() => {
  return () => {
    if (sound) {
      console.log('Unloading Sound');
      sound.unloadAsync();
    }
  };
}, [sound]);



  return (
    <ImageBackground
      source={require('../Images/music.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
     
        <Button title="Play Clasical Music" onPress={playSound} />
        <Button title="Stop Classical Music" onPress={stopSound} />

        <View style={styles.b1}>
  <TouchableOpacity onPress={navigateBack}>
  <Text style={styles.buttonText}>Set the Background Music</Text>
</TouchableOpacity>

</View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  image: {
    width: '30%', 
    height: '25%', 
    marginBottom: '20px',
    marginTop: '60%', 
  },
  b1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    marginTop: 30,
    backgroundColor: '#1773BC',
  },
  buttonText: {
    color: 'white',
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default MusicPage;

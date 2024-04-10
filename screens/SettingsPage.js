//Pass image from one screen to another
//https://stackoverflow.com/questions/66954136/trying-to-pass-an-image-data-to-another-screen-in-react-native

import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import React, { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {Button} from 'react-native-paper';

const SettingsPage = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem('profileImage');
        if (storedImage) {
          setImage(storedImage);
        }
      } catch (error) {
        console.error('Error fetching profile image:', error);
      }
    };

    fetchProfileImage();
  }, []);

  const navigateToTime = () => {
    navigation.navigate('TimeLimitPage');
  };

  const navigateToMusic = () => {
    navigation.navigate('MusicPage');
  };

  const s1 = () => {
    const speak1 = 'Change profile picture';
    Speech.speak(speak1, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
  };
  const s2 = () => {
    const speak2 = 'Set Screen Time';
    Speech.speak(speak2, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
  };
  const s3 = () => {
    const speak3 = 'Change background music';
    Speech.speak(speak3, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
  };

  const choosePicture = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.canceled) {
      try {
        await AsyncStorage.setItem('profileImage', result.uri);

        setImage(result.uri);

        // Navigate to other screens and add the image in home and game page
        navigation.navigate('Home1', { image: result.uri });
        navigation.navigate('GamePage', { image: result.uri });
      } catch (error) {
        console.error('Error saving image to AsyncStorage:', error);
      }
    }
  };

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch(error => alert(error.message));
  };

  return (
    <ImageBackground
      source={require('../Images/background1.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Settings</Text>

      
        <View style={styles.pic}>
          {image && <Image source={{ uri: image }} style={{ width: 170, height: 170, borderRadius: 100 }} />}
        </View>

        <View style={styles.emailT}>
          <Text style={styles.buttonText2}>Email: {auth.currentUser?.email}</Text>
        </View>

        <Button icon="camera" mode="contained" onPress={() => {choosePicture();s1();}} style={styles.b1} labelStyle={styles.buttonText}>
          Change profile Picture
        </Button>

        <Button icon="clock" mode="contained" onPress={() => {navigateToTime();s2();}} style={styles.b1} labelStyle={styles.buttonText}>
          Set Screen Time for app
        </Button>

        <Button icon="music" mode="contained" onPress={() => {navigateToMusic();s3();}} style={styles.b1} labelStyle={styles.buttonText}>
          Change background music
        </Button>

        <Button icon="logout" mode="contained" onPress={handleLogOut} style={styles.b1} labelStyle={styles.buttonText}>
          Log out
        </Button>
      

      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop: 40,
    color: 'white',
  },
  b1: {
    marginVertical: 13,
    backgroundColor: '#1773BC',

  },
  buttonText: {
    color: 'white',
    fontSize: 21,
   // fontWeight: 'bold',
  },
 

  pic: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: "relative",
  },
  

  buttonText2: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 13,
  },
});

export default SettingsPage;

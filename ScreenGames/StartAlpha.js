import { StyleSheet, Text, View, TouchableOpacity, ImageBackground} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';
const ChooseGroupAlpha = () => {
    const navigation = useNavigation()
    
    
    const navigateToAlpha = () => {
      navigation.navigate('AlphaG');
    };
    
    const s1 = () => {
      const speak1 = 'You have 26 questions to answer';
      Speech.speak(speak1, { rate: 0.8, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };
    return (

      <ImageBackground
      source={require('../Images/backgroundABC.jpg')}
      style={styles.backgroundImage}>
    <View style={styles.container}>
    <Text style={styles.headerText}onPress={s1}>You have 26 Questions to answer</Text>

        
        

        <TouchableOpacity
            onPress={navigateToAlpha}
            style={styles.b1}
        >
        <Text style={styles.buttonText}>Start Game</Text>
        </TouchableOpacity>

        </View>
        </ImageBackground>
  )
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },


  b1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#1773BC',
        
    },
          
  
  buttonText: {
    color: 'white',
    fontSize: 19, 
    fontWeight: 'bold', 
  },
      
     headerText: {
      fontSize: 28,
      fontWeight: 'bold',
      marginTop:125,
      color: '#1773BC'
    }, 
      
  });

export default ChooseGroupAlpha
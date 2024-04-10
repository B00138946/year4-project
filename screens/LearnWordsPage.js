import { StyleSheet, View, Dimensions, Image,  ImageBackground } from 'react-native';
import React, { useState, useRef } from 'react';
import Carousel from 'react-native-snap-carousel';
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
import data from '../Data/dataWords';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export const SLIDER_WIDTH = SCREEN_WIDTH;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.65);

const LearnWordsPage = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  const renderItem = ({ item }) => {
    const handleButtonPress = () => {
      Speech.speak(item.name, { rate: 1, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };

    const handleSlowSpeech = () => {
      Speech.speak(item.name, { rate: -3, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };

    return (
      <View style={styles.container}>
        <Image source={{ uri: item.url }} style={styles.image} />
        <FontAwesome.Button testID="speakNormalButton1" name="volume-up" backgroundColor="#012a7d" onPress={handleButtonPress} style={styles.b1}>
          Speak Normal2
        </FontAwesome.Button>
        <FontAwesome.Button name="volume-up" backgroundColor="#012a7d" onPress={handleSlowSpeech} style={styles.b1}>
          Speak Slow
        </FontAwesome.Button>
      </View>
    );
  };

  return (
    <ImageBackground source={require('../Images/image1.jpg')} style={styles.backgroundImage}>
      <View style={styles.carouselContainer}>
        <Carousel
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          onSnapToItem={(index) => setIndex(index)}
        />
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: SCREEN_HEIGHT * 0.1,
  },
  container: {
    backgroundColor: '#1773BC',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    width: ITEM_WIDTH,
    height: SCREEN_HEIGHT * 0.5,
    borderRadius: 20,
  },
});

export default LearnWordsPage;

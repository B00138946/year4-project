import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
import data from '../Data/dataAlphaGame';

const AlphaGameInfant = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledData, setShuffledData] = useState([...data]); 
  const navigation = useNavigation();


  // Shuffle the data array 
  useEffect(() => {
    shuffleData();
  }, []);
//Data will get shuffled
  const shuffleData = () => {
    const shuffledDataCopy = [...data];
    for (let i = shuffledDataCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDataCopy[i], shuffledDataCopy[j]] = [shuffledDataCopy[j], shuffledDataCopy[i]];
    }
    setShuffledData(shuffledDataCopy);
  };


  const handleOptionClick = (answer) => {
    const correctAnswer = shuffledData[currentQuestion].correctAnswer.toLowerCase();
    if (answer.toLowerCase() === correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(answer);
  };

  const speakOption = (option) => {
    Speech.speak(option, { rate: 0.8, voice: 'com.apple.voice.compact.en-US.Samantha' });
  };

  const handleNextClick = () => {
    setSelectedOption(null);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      
      // Shuffle the data when the quiz is finished
      shuffleData();
      setCurrentQuestion(0);
      navigation.navigate('score', { score: score, totalQuestions: shuffledData.length });
    }
  };

  return (
    <ImageBackground
    
    source={{ uri: 'https://i.pinimg.com/564x/ad/db/bc/addbbc2e6196591eca7a3efdb3af81e3.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.headerText}>Click the correct Sound</Text>
        <Image source={{ uri: shuffledData[currentQuestion].url }} style={styles.image} />
        <View style={styles.buttonContainer}>
          {shuffledData[currentQuestion].options.map((option) => (
            <View key={option} style={styles.buttonWrapper}>
              <TouchableOpacity
                onPress={() => {
                  speakOption(option);
                  handleOptionClick(option);
                }}
                style={[
                  styles.button,
                  { backgroundColor: option === selectedOption ? 'green' : 'gray' },
                ]}
              >
                <FontAwesome name="volume-up" size={20} color="white" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <TouchableOpacity
          onPress={handleNextClick}
          style={styles.b2}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};





const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 12,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  buttonText: {
    color: 'white',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    width: '80%',
    marginBottom: 10,
  },
  b2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
    backgroundColor: '#1773BC',
    width: '40%',
  },
  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  buttonWrapper: {
    flexBasis: '40%',
  },
  image: {
    width: 220,
    height: 300,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 80,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: -50,
    marginTop: 40,
    color: 'white',
  },
});

export default AlphaGameInfant;

import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React, { useState, useRef, useEffect  } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as Speech from 'expo-speech';
import { FontAwesome } from '@expo/vector-icons';
import data from '../Data/dataAnimalGameInfant';

const AnimalGameInfant = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const scoreRef = useRef(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledData, setShuffledData] = useState([...data]); // Keep an initial copy for re-shuffling
  const navigation = useNavigation();

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffledDataCopy = [...data];
    for (let i = shuffledDataCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledDataCopy[i], shuffledDataCopy[j]] = [shuffledDataCopy[j], shuffledDataCopy[i]];
    }
    setShuffledData(shuffledDataCopy);
  };

  const handleOptionClick = (answer) => {
    setSelectedOption(answer);
  };

  const handleNextClick = () => {
    // Check if an option is selected before updating the score
    if (selectedOption !== null) {
      const correctAnswer = shuffledData[currentQuestion].correctAnswer.toLowerCase();
      if (selectedOption.toLowerCase() === correctAnswer) {
        scoreRef.current += 1;
        console.log('Correct answer! New score:', scoreRef.current);
      } else {
        console.log('Incorrect answer. Current score:', scoreRef.current);
      }
    }

    // Reset the selected option when moving to the next question
    setSelectedOption(null);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      shuffleQuestions(); // Shuffle questions before navigating to the score screen
      setCurrentQuestion(0);
      console.log('Navigating to score screen with final score:', scoreRef.current);
      navigation.navigate('score', { score: scoreRef.current, totalQuestions: shuffledData.length, screenName: 'Infant Animal Game', });
    }
  };

  const speakOption = (option) => {
    Speech.speak(option, { rate: 0.8, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
  };

  return (
    <ImageBackground
      source={require('../Images/image1.jpg')}
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

export default AnimalGameInfant;

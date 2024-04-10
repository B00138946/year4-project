import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Card, Button as PaperButton, Text as PaperText } from 'react-native-paper';


const Achievement = () => {
  const [achievementData, setAchievementData] = useState(null)


  // Get the achievement data asynchronously
  const getAchievementData = async () => {
    try {
      const storedData = await AsyncStorage.getItem('achievementData');
      if (storedData) {
        setAchievementData(JSON.parse(storedData));
      }
    } catch (error) {
      console.error('Error retrieving achievement data:', error);
    }
  };

  useEffect(() => {
    getAchievementData();
  }, []);

  if (!achievementData) {
    return null;
  }

  const { score, totalQuestions, screenName, resultBadge} = achievementData;


  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <ImageBackground
      source={require('../Images/background1.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        
      {/*  <Text style={styles.Text}>
        Current Score for {screenName}: {score} / {totalQuestions} 
        </Text>
        <Image source={resultBadge} style={styles.image} />
        </View>  
  */}

        <Card style={styles.card}>
  <Card.Title title={screenName} titleStyle={styles.cardTitle} />
  <Card.Cover source={resultBadge} style={styles.coverImage}/>
  <Card.Content>
  <Card.Title title={`Your Score: ${score} out of ${totalQuestions}`}
  titleStyle={styles.cardTitle} />
  </Card.Content>
  <Card.Actions>
    
  </Card.Actions>
  
</Card>
</View> 
    </ImageBackground>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
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
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  Text:{
    fontSize: 23,
    fontWeight: 'bold',
    marginTop:40,
    color: 'blue',
  },
  image: {
    width: '30%', 
    height: '25%', 
    alignSelf: 'center', 
  },
  buttonText: {
    color: 'white',
    fontSize: 19, 
    fontWeight: 'bold', 
  },
  card: {
    width: 350, 
    height: 310, 
    //backgroundColor: 'blue',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1773BC', 
    textAlign: 'center'
  },
  cardsub: {
    fontSize: 15,
    color: 'green', 
    textAlign: 'center'
    
  },
  coverImage: {
    width: '35%', 
    height: '60%', 
    alignSelf: 'center',
    backgroundColor: 'transparent',
    
  },

});

export default Achievement;

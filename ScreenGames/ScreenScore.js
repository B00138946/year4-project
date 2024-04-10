import { StyleSheet, Text, View, TouchableOpacity , ImageBackground,Image } from 'react-native'
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Avatar, Card, Button as PaperButton, Text as PaperText } from 'react-native-paper';

const ScreenScore = ({ route }) => {
  const navigation = useNavigation();
  


  const { score, totalQuestions, screenName } = route.params;
  let resultBadge, resultMessage;

  if (score >= 8) {
    resultBadge = require('../Images/1st.png');
    resultMessage = 'You have earned a Gold Badge';
  } else if (score >= 5 && score <= 7) {
    resultBadge = require('../Images/2nd.png');
    resultMessage = 'You have earned a Silver Badge';
  } else if (score >= 1 && score <= 4) {
    resultBadge = require('../Images/3rd.png');
    resultMessage = 'You have earned a Bronze Badge';
  } else if (score === 0) {
    resultMessage = 'None of the questions were correct';
  }

  // Store achievement data asynchronously
  const storeAchievementData = async () => {
    try {
      const achievementData = { score, totalQuestions, screenName, resultBadge};
      await AsyncStorage.setItem('achievementData', JSON.stringify(achievementData));
    } catch (error) {
      console.error('Error storing achievement data:', error);
    }
  };

  useEffect(() => {
    storeAchievementData();
  }, []); 




  return (
    <ImageBackground source={require('../Images/image1.jpg')} style={styles.backgroundImage}>
      <Text style={styles.headerText}>Score</Text>
      <View style={styles.container}>
       
       {/* <Text style={styles.headerText}>Score</Text>
       {/* <Text style={styles.Text}>Your Score: {score} out of {totalQuestions} for {screenName}</Text>
        <Image source={resultBadge} style={styles.image} />
        <Text style={styles.resultMessage}>{resultMessage}</Text>

  */}
        
          <Card style={styles.card}>
  <Card.Title title={screenName} titleStyle={styles.cardTitle} />
  <Card.Cover source={resultBadge} style={styles.coverImage}/>
  <Card.Content>
  <Card.Title title={`Your Score: ${score} out of ${totalQuestions}`} subtitle={resultMessage} subtitleStyle={styles.cardsub}
  titleStyle={styles.cardTitle} />
  </Card.Content>
  <Card.Actions>
    
  </Card.Actions>
  
</Card>

        


        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.b1}>
          <Text style={styles.buttonText}>Back to Games Page</Text>
        </TouchableOpacity>
     
      </View>
    </ImageBackground>
  );
};

export default ScreenScore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },

    Text:{
      fontSize: 28,
      fontWeight: 'bold',
      marginTop:40,
      color: 'blue',
    },
    headerText:{
      fontSize: 27,
      fontWeight: 'bold',
      marginTop:40,
      color: 'white',
      textAlign: 'center', 
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
  
  image: {
    width: '35%', 
    height: '25%', 
    marginVertical: 20, 
  },
  resultMessage: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 15,
    color: 'green', 
  },
  cardContainer: {
    marginVertical: 20,
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
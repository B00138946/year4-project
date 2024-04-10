import { StyleSheet, Text, View, ScrollView, TouchableOpacity, ImageBackground, Image, Button } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button as PaperButton, Text as PaperText } from 'react-native-paper';
import * as Speech from 'expo-speech';

const GamePage = () => {
  const navigation = useNavigation()
  const route = useRoute();
  const { image } = route.params || {};
    
    const navigateToWordG = () => {
      navigation.navigate('ChooseAge');
    };

      const navigateToStartAlpha = () => {
        navigation.navigate('StartAlpha');
      };

      const navigateToAnimalG= () => {
        navigation.navigate('ChooseAnimal');
      };
      const navigateToAchievement= () => {
        navigation.navigate('Achievement');
      };



      const s1 = () => {
        const speak1 = 'Words game';
        Speech.speak(speak1, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
      };
      const s2 = () => {
        const speak2 = 'Alphabet game';
        Speech.speak(speak2, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
      };
      const s3 = () => {
        const speak3 = 'animals game';
        Speech.speak(speak3, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
      };
      const s4 = () => {
        const speak4 = 'Achievements';
        Speech.speak(speak4, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
      };


      return (

      
<ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
        source={require('../Images/background1.jpg')}
        style={styles.backgroundImage}>
    
    <View style={styles.container}>
    <Text style={styles.headerText}>Games</Text>
{/*
        <TouchableOpacity
            onPress={navigateToWordG}
            style={styles.b1}
        >
        <Text style={styles.buttonText}>Words Game</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
            onPress={navigateToStartAlpha}
            style={styles.b2}
        >
        <Text style={styles.buttonText}>Alphabet Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={navigateToAnimalG}
            style={styles.b3}
        >
        <Text style={styles.buttonText}>Animals Game</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={navigateToAchievement}
            style={styles.b4}
        >
        <Text style={styles.buttonText}>Achievement</Text>
        </TouchableOpacity>
*/} 



        <View style={styles.pic}> 
        {image && <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius: 100 }} />}
        </View>


        <TouchableOpacity onPress={() => {navigateToWordG();s1();}} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/cc/5f/58/cc5f5892cbe069552dc608543b688225.jpg' }} />
            <Card.Actions>
            <Card.Title title="Words Game" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigateToStartAlpha();s2();}}style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/b8/32/1e/b8321ea321d97aa8863e27be3dd58296.jpg' }} />
            <Card.Actions>
            <Card.Title title="Alphabet Game" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigateToAnimalG();s3();}} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/28/c1/43/28c143d911a243a3961ad90903595294.jpg' }} />
            <Card.Actions>
            <Card.Title title="Animals Game" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigateToAchievement();s4();}} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/65/f8/61/65f861f14f0aa4e559460a926572e811.jpg' }} />
            <Card.Actions>
            <Card.Title title="Achievements" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>
        

</View>
</ImageBackground>
</ScrollView>
  )
}



const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', 
  },
  card: {
    width: 290, 
    height: 245, 
  },
  cardContainer: {
    marginVertical: 20,
  },
  chatContainer: {
    marginVertical: 50,
    right: 150,
    justifyContent: 'center',
    width: 64,
    height: 64,
  },
  
  
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1773BC', 
  },

  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop:40,
    color: 'white',
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

  b2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    backgroundColor: '#1773BC',
  },

  b3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    backgroundColor: '#1773BC',
  },

  b4: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 50,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    backgroundColor: '#1773BC',
  },
      buttonText: {
        color: 'white',
        fontSize: 16, 
        fontWeight: 'bold', 
      },
      pic: {
        position: 'absolute',
        top: 20, 
        right: 20, 
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

export default GamePage
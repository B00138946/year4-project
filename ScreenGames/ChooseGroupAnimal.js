import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, ScrollView} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Card, Button as PaperButton, Text as PaperText } from 'react-native-paper';


const ChooseGroupAnimal = () => {
    const navigation = useNavigation()
    
    
    const navigateToInfant = () => {
      navigation.navigate('AnimalGameInfant');
    };
    const navigateToTod = () => {
      navigation.navigate('AnimalGameTod');
    };
    const navigateToPre = () => {
      navigation.navigate('AnimalGamePre');
    };
    

    return (
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      <ImageBackground
      source={require('../Images/animalBackground.jpg')}
      style={styles.backgroundImage}>
    <View style={styles.container}>


        
    <TouchableOpacity onPress={navigateToInfant} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/f7/b5/24/f7b524784c62a456787503342c53f8e3.jpg' }} />
            <Card.Actions>
            <Card.Title title="Infants" subtitle="3 months - 1 year" titleStyle={styles.cardTitle} subtitleStyle={styles.cardsub}/>
            
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToTod} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/00/ba/e5/00bae5016f4a6d627a939d3a4a08abe3.jpg' }} />
            <Card.Actions>
            <Card.Title title="Toddlers" subtitle="1 - 3 years" titleStyle={styles.cardTitle} subtitleStyle={styles.cardsub}/>
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateToPre} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/1d/5c/23/1d5c23cbf38782f037d36608dfd2b519.jpg' }} />
            <Card.Actions>
            <Card.Title title="Pre-Schoolers" subtitle="3 - 5 years" titleStyle={styles.cardTitle} subtitleStyle={styles.cardsub}/>
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
          
  b2: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#1773BC',   
    },
  b3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 3,
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
      marginTop:40,
    }, 
    card: {
      width: 290, 
      height: 275, 
      backgroundColor: "rgba(10, 135, 245, 0.5)",
    },
    cardContainer: {
      marginVertical: 20,
    },
    cardTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white', 
    },
    cardsub: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white', 
    },


  });

export default ChooseGroupAnimal
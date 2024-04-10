//Show the profile pic
//https://stackoverflow.com/questions/71795122/how-to-pass-image-uri-from-one-screen-to-other-in-react-native-using-expo-imag
//https://callstack.github.io/react-native-paper/
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { Card, Button as PaperButton, Text as PaperText } from 'react-native-paper';
import * as Speech from 'expo-speech';


const HomePage = () => {


  const navigation = useNavigation()
  const route = useRoute();
  const { image } = route.params || {};
 ;
  
    const navigateToWord = () => {
      navigation.navigate('Words');
    };
     
    const navigateToAphabet = () => {
      navigation.navigate('Alphabet');
    };
    const navigateToAnimal= () => {
      navigation.navigate('Animal');
    }
    const navigateToChat= () => {
      navigation.navigate('ChatbotPage');
    };

    const s1 = () => {
      const speak1 = 'Learn words';
      Speech.speak(speak1, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };
    const s2 = () => {
      const speak2 = 'Learn alphabet';
      Speech.speak(speak2, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };
    const s3 = () => {
      const speak3 = 'Learn Animals';
      Speech.speak(speak3, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };
    const s4 = () => {
      const speak4 = 'Learny Chatbot';
      Speech.speak(speak4, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
    };
    
  
  return (

    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <ImageBackground
    source={require('../Images/background1.jpg')}
    style={styles.backgroundImage}>

    <View style={styles.container}>
    <Text style={styles.headerText}>Home</Text>

{/*
        <TouchableOpacity
            onPress={navigateToWord}
            style={styles.b1}
        >

        <Text style={styles.buttonText}>Learn Words</Text>
        </TouchableOpacity>

        
        <TouchableOpacity
            onPress={navigateToAphabet}
            style={styles.b2}
        >
        <Text style={styles.buttonText}>Learn Alphabet</Text>
        </TouchableOpacity>


        <TouchableOpacity
            onPress={navigateToAnimal}
            style={styles.b3}
        >
        <Text style={styles.buttonText}>Learn Animals</Text>
        </TouchableOpacity>
*/}        
        
       

       
        <View style={styles.pic}> 
        {image && <Image source={{ uri: image }} style={{ width: 70, height: 70, borderRadius: 100 }} />}
        </View>
 
      
        <TouchableOpacity onPress={() => {navigateToWord();s1();}} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/30/d8/91/30d8910200a6dc75b09a41c33142baf2.jpg' }} />
            <Card.Actions>
            <Card.Title title="Learn Words" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigateToAphabet();s2();}}style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/ef/bc/4f/efbc4f900673471eaa074f39ac903a36.jpg' }} />
            <Card.Actions>
            <Card.Title title="Learn Alphabet" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {navigateToAnimal();s3();}} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/bb/25/4a/bb254a992770d765fa05d4aa1464d3e4.jpg' }} />
            <Card.Actions>
            <Card.Title title="Learn Animals" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>

        <View style={styles.chatContainer}>
        <TouchableOpacity
            onPress={() => {navigateToChat();s4();}}
        ><Image source={require('../Images/chatbotbutton.png')} style={styles.chatimage} />
        </TouchableOpacity>
        </View>

</View>
</ImageBackground>
</ScrollView>

  );
};




const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
container: {
  flex: 1,
  alignItems: 'center',
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

b1: {
alignItems: 'center',
justifyContent: 'center',
paddingVertical: 10,
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
      fontSize: 16, 
      fontWeight: 'bold', 
    },
    headerText: {
      fontSize: 27,
      fontWeight: 'bold',
      marginTop:40,
      color: 'white',
    },
    pic: {
      position: 'absolute',
      top: 25, 
      right: 20, 
      alignItems: 'center',
      justifyContent: 'center',
    },
    chatimage: {
      width: 127,
      height: 177,
      resizeMode: 'cover',  
    },
   
});
export default HomePage
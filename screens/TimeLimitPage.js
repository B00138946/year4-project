//https://docs.expo.dev/versions/latest/sdk/date-time-picker/
//https://github.com/react-native-datetimepicker/datetimepicker
//https://docs.expo.dev/versions/latest/sdk/background-fetch/
//https://docs.expo.dev/versions/latest/sdk/async-storage/
//https://react-native-async-storage.github.io/async-storage/docs/usage/
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import * as BackgroundFetch from 'expo-background-fetch';
import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { auth } from '../firebase';
import { Avatar, Card, Button as PaperButton, Text as PaperText } from 'react-native-paper';



const BACKGROUND_FETCH_TASK = 'background-fetch-task';

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  return BackgroundFetch.Result.NewData;
});

const TimeLimitPage = () => {
  const navigation = useNavigation();
  const [showPicker, setShowPicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const setTimeLimit = async () => {
    const currentTime = new Date().getTime();
    const timeLimit = selectedTime.getTime(); 
    await AsyncStorage.setItem('timeLimit', timeLimit.toString());


    const formattedTime = selectedTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    Alert.alert(`You set the app usage time until ${formattedTime}.`);
    navigation.navigate('Settings');

    // log out function
    const handleLogOut = () => {
      auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
        .catch(error => alert (error.message))
      }



  setTimeout(() => {
    Alert.alert(
      'Time limit reached :(',
      'Press OK to exit the app :)',
      [
        {
          text: 'OK',
          onPress: () => {
            handleLogOut(); 
          },
        },
      ]
    );
  }, timeLimit - currentTime);
};

  const onPickerChange = (event, selected) => {
    if (event.type === 'set') {
      setShowPicker(false);
      setSelectedTime(selected || selectedTime);
    } else if (event.type === 'dismissed') {
      setShowPicker(false);
    }
  };

  useEffect(() => {
    const registerBackgroundTask = async () => {
      await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
        minimumInterval: 15 * 60,
      });
    };

    registerBackgroundTask();

    return async () => {
      await BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
    };
  }, []);

  return (
    <ImageBackground
      source={require('../Images/image1.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>


      <TouchableOpacity onPress={() => setShowPicker(true)} style={styles.cardContainer}>
          <Card style={styles.card}>
            <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/62/1f/d5/621fd5f2b64a8d0cb8b1f277b856cad0.jpg' }} />
            <Card.Actions>
            <Card.Title title="Choose a time" titleStyle={styles.cardTitle} />
            </Card.Actions>
          </Card>
        </TouchableOpacity>


        {showPicker && (
          <DateTimePicker
            testID="dateTimePicker"
            value={selectedTime}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onPickerChange}
            
          />
        )}

        <TouchableOpacity
          style={styles.b1}
          onPress={setTimeLimit}>
          <Text style={styles.buttonText}>Set this Time</Text>
        </TouchableOpacity>
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
  
  b1: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 14,
    elevation: 3,
    marginBottom: 14,
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: '#1773BC',
  },
  card: {
    width: 330, 
    height: 255, 
  },
  cardContainer: {
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1773BC', 
  },
  buttonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 40,
  },
});

export default TimeLimitPage;

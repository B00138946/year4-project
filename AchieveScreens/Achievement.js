import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Card } from 'react-native-paper';
import { db } from '../firebase';

const Achievement = () => {
  const [achievementData, setAchievementData] = useState(null);

  // Get the achievement data asynchronously
  const getAchievementData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log("All keys:", keys);

      const gameKeys = keys.filter(key => key.startsWith('achievementData_'));
      console.log("Game keys:", gameKeys);

      const data = await Promise.all(gameKeys.map(async key => {
        const storedData = await AsyncStorage.getItem(key);
        console.log(`Data for key ${key}:`, storedData);
        return JSON.parse(storedData);
      }));

      setAchievementData(data);
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

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ImageBackground
        source={require('../Images/background1.jpg')}
        style={styles.backgroundImage}
      >
        <View style={styles.container}>
          {achievementData.map((data, index) => (
            <Card key={index} style={styles.card}>
              <Card.Title title={data.screenName} titleStyle={styles.cardTitle} />
              <Card.Cover source={data.resultBadge} style={styles.coverImage} />
              <Card.Content>
                <Card.Title
                  title={`Your Score: ${data.score} out of ${data.totalQuestions}`}
                  titleStyle={styles.cardTitle}
                />
              </Card.Content>
            </Card>
          ))}
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
  card: {
    width: 350,
    height: 310,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1773BC',
    textAlign: 'center',
  },
  coverImage: {
    width: '35%',
    height: '60%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
});

export default Achievement;

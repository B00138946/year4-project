//https://www.npmjs.com/package/react-native-gifted-chat
//https://medium.com/@bhuvin25/integrating-chatgpt-with-your-react-native-app-a-step-by-step-guide-927f7b7d0cde
//https://dev.to/mrcflorian/how-to-integrate-chatgpt-api-in-react-native-3k1j
//https://www.youtube.com/watch?v=tdxgG9Gq41A&list=LL&index=1&t=761s&ab_channel=BugNinza
//https://www.youtube.com/watch?v=XOnKpBCtrOM&list=LL&index=1&t=405s&ab_channel=BugNinza
//Adding the hear
//https://stackoverflow.com/questions/69190626/how-to-add-button-near-bubble-gifted-chat
//https://docs.expo.dev/versions/latest/sdk/speech/


import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble} from 'react-native-gifted-chat';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';




const ChatbotPage = () => {
  const [messages, setMessages] = useState([]);

// Define an array of keywords
const keywords = ['english', 'words','word', 'alphabet', 'animals', 'animal', 'verb'];



  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello, I m your chatbot! :)',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
        },
      },
    ]);
    }, []);

  const handleSend = async newMessages => {
    const text = newMessages[0].text.toLowerCase();



    
//check
    if (!keywords.some(keyword => text.includes(keyword))) {
      const botMessage = {
        _id: new Date().getTime() + 1,
        text: 'Please ask me something related to learning.',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Chatbot',
        },
      };
      setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
      return;
    
    }







  setMessages(previousMessages =>
    GiftedChat.append(previousMessages, [
      {
        _id: newMessages[0]._id,
        text: text,
        createdAt: newMessages[0].createdAt,
        user: {
          _id: 1,
        },
      },
    ])
  );


    const apiKey = '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';
  
    // Send user message to OpenAI API
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a helpful assistant.',
            },
            {
              role: 'user',
              content: text,
            },
          ],
        }),
      });
  
      if (!response.ok) {
        throw new Error(`OpenAI API request failed with status: ${response.status}`);
      }
  
      const responseData = await response.json();
  
      if (!responseData || !responseData.choices || responseData.choices.length === 0 || !responseData.choices[0].message) {
        throw new Error('Invalid response format from OpenAI API');
      }
  
      const botMessage = responseData.choices[0].message.content.trim();
  
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages, [
          {
            _id: Math.random().toString(36).substring(7),
            text: botMessage,
            createdAt: new Date(),
            user: {
              _id: 2,
              name: 'Chatbot',
            },
          },
        ])
      );
    } catch (error) {
      console.error('Error sending message to OpenAI API:', error.message || error);
    }
  };
  const handleAudioButtonClick = (audioMessage) => {
    Speech.speak(audioMessage, {rate: 0.7,voice: "com.apple.ttsbundle.siri_Aaron_en-US_compact" }); 
  };


  const s1 = () => {
    const speak1 = 'Ask the chatbot a question, like Words, Alphabet, animals';
    Speech.speak(speak1, { rate: 0.7, voice: 'com.apple.ttsbundle.siri_Aaron_en-US_compact' });
  };

  const renderBubble = (props) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Bubble {...props} />
        <TouchableOpacity
          onPress={() => handleAudioButtonClick(props.currentMessage.text)}
        >
          <Image
            style={{
              width: 50,
              height: 50,
              marginTop: 'auto',
              bottom: 0,
            }}
            source={require('../Images/volume.png')}
          />
        </TouchableOpacity>
      </View>
    );
  };


  
  
  return (
    <ImageBackground
      source={require('../Images/background1.jpg')}
      style={styles.backgroundImage}>
      
      <View style={styles.container}>
        
      <Text style={styles.headerText} onPress={s1} >Ask the chatbot a question, like Words, Alphabet, animals !</Text>

    <GiftedChat
      messages={messages}
      onSend={newMessages => handleSend(newMessages)}
      user={{
        _id: 1,
      
      }}
      renderBubble={renderBubble}
      />
    </View>
  </ImageBackground>
)
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  image: {
    width: 190,
    height: 250,
    marginTop: -10,
  },
});

export default ChatbotPage;

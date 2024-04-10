import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';


const ResetPass = () => {
  const [email, setEmail] = useState('')
  const navigation = useNavigation()
 
  const navigateToBack= () => {
    navigation.navigate('Login');
  };


  const changePass = () => {
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email has been sent");
        
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  
    

  return (

    


<ImageBackground
    source={require('../Images/image1.jpg')}
    style={styles.backgroundImage}>


    <KeyboardAvoidingView
    style={styles.container}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    >

<Text style={styles.headerText}>Forgot my Password</Text>
       
       <Image
        source={require('../Images/logo.png')} 
        style={styles.image}
      />

<View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder="Enter Your Email"
          style={styles.input}
          
        />
        </View>
      

<View style={styles.buttonContainer}>

        <View style={styles.button}>
        <TouchableOpacity
            onPress={navigateToBack}
            style={styles.button}
        >
         <Text style={styles.buttonText}>Back</Text>

        </TouchableOpacity>


        <TouchableOpacity
            onPress={changePass}
            style={styles.button}
        >
        <Text style={styles.buttonText}>Reset your password</Text>
        </TouchableOpacity>
        </View>

        </View>
    </KeyboardAvoidingView>
    </ImageBackground>
  )
}

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 0,
      },

      backgroundImage: {
        flex: 1,
        resizeMode: 'cover', 
      },

      input: {
        width: 270,
        height: 44,
        padding: 10,
        marginTop: 6,
        marginBottom: 10,
        borderRadius: 14,
        backgroundColor: '#e8e8e8'
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      borderRadius: 14,
      backgroundColor: '#1773BC',

    },
    buttonText: {
      color: 'white',
      fontSize: 16, 
      fontWeight: 'bold', 
    },
image: {
    width: 300,
    height: 200, 
    resizeMode: 'cover',
    marginBottom: 40,
    marginTop:10,
    borderRadius: 14,
  },
  buttonContainer: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 27,
    fontWeight: 'bold',
    marginTop:40,
    color:'white',
  },
  });
  export default ResetPass;
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  // Navigates the user to the home page when the button is pressed
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    });
    return unsubscribe;
  }, []);





  
  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userDetails => {
        const user = userDetails.user;
        console.log('Registered in with:', user.email);
      })
      .catch(error => alert.alert(error.message));
  };

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userDetails => {
        const user = userDetails.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  const navigateToReset = () => {
    navigation.navigate('Reset');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      
        <ImageBackground source={require('../Images/image1.jpg')} style={styles.backgroundImage}>
          <Text style={styles.headerText}>Log in</Text>
          <Image source={require('../Images/logo.png')} style={styles.image} />

          <View style={styles.inputContainer}>
            <TextInput
              value={email}
              onChangeText={email => setEmail(email)}
              placeholder="Email"
              style={styles.input}
            />

            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={handleRegister} style={styles.button}>
                <Text style={styles.buttonText}>Create an account</Text>
              </TouchableOpacity>
            </View>
            <Text onPress={navigateToReset} style={styles.forgotPasswordText}>
              Forgot Your Password
            </Text>
          </View>
          <View style={styles.container}>
    </View>
        </ImageBackground>
      
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
  alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 270,
    height: 44,
    padding: 10,
    marginTop: 6,
    marginBottom: 10,
    borderRadius: 14,
    backgroundColor: '#e8e8e8',
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
    marginBottom: 10,
    
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
    marginTop: 10,
    borderRadius: 14,
  },
  buttonContainer: {
    marginTop: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    color: 'white',
  },
  forgotPasswordText: {
    marginTop: 10,
    color: '#1773BC',
    textDecorationLine: 'underline',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LoginPage;

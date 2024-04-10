import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


const RegisterPage = () => {
  return (
    //fixes the keybord
    <KeyboardAvoidingView
    style={styles.container}
    behavior="padding"
    >
      
      <View style={styles.inputContainer}>
        
      <TextInput
          //value={name}
          //onChangeText={(name) => setName(name)}
          placeholder="Name"
          style={styles.input}
        />
        
        
        <TextInput
          //value={email}
          //onChangeText={(email) => setEmail(email)}
          placeholder="Email"
          style={styles.input}
        />
      

        <TextInput
          //value={password}
          //onChangeText={(password) => setPassword(password)}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />

        <View style={styles.buttonContainer}>
        <TouchableOpacity
            onPress={()=> {}}
            style={styles.button}
        >
        <Text style={styles.button}>reg</Text>
        </TouchableOpacity>

        


        </View>


        </View>

    </KeyboardAvoidingView>
  )
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#ffffff',
      },
      input: {
        width: 250,
        height: 44,
        padding: 10,
        marginTop: 20,
        marginBottom: 10,
        backgroundColor: '#e8e8e8'
    },
    
  });
  export default RegisterPage;
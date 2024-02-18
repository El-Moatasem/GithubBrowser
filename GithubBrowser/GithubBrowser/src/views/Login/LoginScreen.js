// Import React and React Native components
import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Define the LoginScreen component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>GitHub Browser</Text>
      <TextInput
        style={styles.input}
        placeholder="GitHub username"
      />
      <TextInput
        style={styles.input}
        placeholder="GitHub password"
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    fontSize: 18,
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 5,
  },
  button: {
    width: '90%',
    padding: 15,
    backgroundColor: '#48BBEC',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});

// Export the LoginScreen component
export default LoginScreen;

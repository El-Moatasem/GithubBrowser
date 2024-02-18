// src/navigation/AppNavigator.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../views/Login/LoginScreen';
import HomeScreen from '../views/Home/HomeScreen';
import SearchScreen from '../views/Search/SearchScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Search' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;

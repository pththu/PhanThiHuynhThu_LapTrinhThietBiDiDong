import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Screen1 from './view/screen01';
import Screen2 from './view/screen02';

const Stack = createStackNavigator();

export default function App() {
  return (
     <NavigationContainer>
      <Stack.Navigator  
          screenOptions={{ headerShown: false }} 
          initialRouteName="Screen1" >
        <Stack.Screen name="Screen1" component={Screen1} options={{ title: 'Product' }} />
        <Stack.Screen name="Screen2" component={Screen2} options={{ title: 'Choose Color' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
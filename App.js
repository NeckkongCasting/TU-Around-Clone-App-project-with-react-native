import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './components/LogoScreen';
import MapScreen from './components/MapScreen';
import SignRed1A from './components/SignRed1A';
import SignYellow1B from './components/SignYellow1B';
import SignGreen2 from './components/SignGreen2';
import SignPurple3 from './components/SignPurple3';
import SignBlue5 from './components/SignBlue5';
import MapObject from './components/MapObject';
import HistorySearch from './components/HistorySearch';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
        <Stack.Screen name="MapObject" component={MapObject} />
        <Stack.Screen name="HistorySearch" component={HistorySearch} />
        <Stack.Screen name="SignRed1A" component={SignRed1A} />
        <Stack.Screen name="SignYellow1B" component={SignYellow1B} />
        <Stack.Screen name="SignGreen2" component={SignGreen2} />
        <Stack.Screen name="SignPurple3" component={SignPurple3} />
        <Stack.Screen name="SignBlue5" component={SignBlue5} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
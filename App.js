/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { createStackNavigator } from '@react-navigation/stack';
import MainNavigation from './src/Navigations/MainNavigation';
import MainStack from './src/Navigations/MainStack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='MainNavigation'
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainNavigation" component={MainNavigation} />
        <Stack.Screen name="MainStack" component={MainStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

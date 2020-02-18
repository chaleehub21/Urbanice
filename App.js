import React from 'react';
import { createStackNavigator, crea } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import TestScreen from './components/Test';
import APIScreen from './components/Google';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Test"
          component={TestScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: (() => (<Text style={{ marginTop: 20 }}>Test</Text>))
          }} />
        <Tab.Screen
          name="Google"
          component={APIScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: (() => (<Text style={{ marginTop: 20 }}>Google</Text>))
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


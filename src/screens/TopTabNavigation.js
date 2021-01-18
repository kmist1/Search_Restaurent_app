import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './HomeScreen';
import Location from './Location';
import { SafeAreaView } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function TopTabNavigation() {
  return (
    
      <Tab.Navigator style = {{top: 30}}>
        <Tab.Screen name="List" component={HomeScreen} />
        <Tab.Screen name="Location" component={Location} />
      </Tab.Navigator>
    
  );
}

export default TopTabNavigation;


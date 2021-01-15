import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Burgers from './Burgers';
import Mycart from './Mycart';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Burger" component={Burgers} />
        <Stack.Screen name="Your Cart" component={Mycart} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
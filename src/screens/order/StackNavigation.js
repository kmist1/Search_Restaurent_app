import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import Burgers from './Burgers';
import HotDogs from './Hotdogs';
import Mycart from './Mycart';
import Checkout from './Checkout';


const Stack = createStackNavigator();


export default function App({route}) {
  console.log("menu navigator", route);
  const {restaurantAddress} = route.params;
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Check Out">
            {props => <Checkout {...props} restaurantAddress = {restaurantAddress} />}
        </Stack.Screen>
        <Stack.Screen name="Burger" component={Burgers} />
        <Stack.Screen name="Hotdog" component={HotDogs} />
        <Stack.Screen name="Your Cart" component={Mycart} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feedback from './Feedback'
import FeedbackScreen1 from './FeedbackScreen1';
import FeedbackScreen2 from './FeedbackScreen2';
import GeneralFeedback from './GeneralFeedback';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Feedback">
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="App" component={FeedbackScreen1} />
        <Stack.Screen name="Food" component={FeedbackScreen1} />
        <Stack.Screen name="Service" component={FeedbackScreen1} />
        <Stack.Screen name="Other" component={FeedbackScreen1} />
        <Stack.Screen name="feedback" component={FeedbackScreen2} />
        <Stack.Screen name="GeneralFeedback" component={GeneralFeedback} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
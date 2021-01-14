import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Privacy from './Privacy';
import UserAgreement from './UserAgreement';
import PrivacyPolicy from './PrivacyPolicy';
import OnlineTracking from './OnlineTracking';
import OpenSourceLicences from './OpenSourceLicences';


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Privacy">
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="UserAgreement" component={UserAgreement} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="OnlineTracking" component={PrivacyPolicy} />
        <Stack.Screen name="OpenSourceLicences" component={PrivacyPolicy} />
       
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
import React from "react";
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createDrawerNavigator } from "react-navigation-drawer";
import AboutUs from './src/screens/AboutUs';
import Contact from './src/screens/Contact';
import Location from './src/screens/Location';
import Login from './src/screens/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DetailScreen from './src/screens/DetailScreen';
import SearchBar from './src/screens/SearchBar';
import OrderScreen from './src/screens/order/OrderScreen';
import FeedbackStackNavigator from './src/screens/feedback/StackNavigator';
import PrivacyStackNavigator from './src/screens/privacy/StackNavigator';
import MenuStackNavigator from './src/screens/order/StackNavigation';
import TopTabNavigation from './src/screens/TopTabNavigation';
import * as firebase from 'firebase';
import firebaseConfig from './config/keys';




const Drawer = createDrawerNavigator();

export default function App() {

  if (!firebase.apps.length) {
    console.log('Connected with Firebase')
    firebase.initializeApp(firebaseConfig);
  }


  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TopTabNavigation} />
        <Drawer.Screen name="Contact" component={Contact} />
        <Drawer.Screen name="Location" component={Location} />
        <Drawer.Screen name="DetailScreen" component={DetailScreen} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Search" component={SearchBar}/>
        <Drawer.Screen name="Order" component={OrderScreen}/>
        <Drawer.Screen name="Feedback" component={FeedbackStackNavigator}/>
        <Drawer.Screen name="Privacy & Agreement" component={PrivacyStackNavigator}/>
        <Drawer.Screen name = "MENU" component={MenuStackNavigator}/>

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Details" component={DetailsScreen} />
//       <Tab.Screen name="Login" component={LoginScreen} />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyTabs />
//     </NavigationContainer>
//   );
// }
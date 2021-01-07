import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from "react-navigation-drawer";
import AboutUs from './src/screens/AboutUs';
import Contact from './src/screens/Contact';
import Location from './src/screens/Location';
import HomeScreen from './src/screens/HomeScreen'


const DrawerNavigation = createDrawerNavigator(
  {
    HomeScreen:HomeScreen,
    AboutUs: AboutUs,
    ContactUS:Contact,
    Location:Location
  },
  {
    initialRouteName: "HomeScreen",
  }
);

const Router = createAppContainer(
  createSwitchNavigator({
    // This is where your Auth screens would be handled.
    DrawerNavigation
  })
);

export default function App() {
  return <Router />;
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
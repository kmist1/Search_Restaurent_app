//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';
import ApiManager from './api/ApiManager';

//Create custom components
const DetailsScreen = ({route, navigation}) => {
const {id, address, city} = route.params;
  return (
    <SafeAreaView style={styles.container}>
       <Text style = {styles.welcomeText}>Details</Text> 
       <Text>Restaurent ID is: {id}</Text> 
       <Text>Location of restaurent: {address}</Text>
       <Text>City: {city}</Text>
      <StatusBar style="auto"/>
      <Button
        title = "Order Now"
        onPress = {()=> navigation.navigate("Order", {id: id, restaurantAddress: address })}
      />
    </SafeAreaView>
  );
}

//Export 
export default DetailsScreen;

//Apply Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 450,
    height: 200,
    position: 'relative',
  },
  welcomeText: {
    fontSize: 30,
    fontStyle: 'italic'
  }
});
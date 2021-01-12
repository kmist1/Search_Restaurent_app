//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';
import ApiManager from './api/ApiManager';

//Create custom components
const DetailsScreen = ({title,navigation}) => {
console.log(title);
  return (
    <SafeAreaView style={styles.container}>
       <Text style = {styles.welcomeText}>Details</Text> 
       <Text>title: {title}</Text> 
      <StatusBar style="auto"/>
      <Button
        title = "Order Now"
        onPress = {()=> navigation.navigate("Order", {title: title})}
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
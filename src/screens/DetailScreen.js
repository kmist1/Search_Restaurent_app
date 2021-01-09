//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Image} from 'react-native';
import ApiManager from './api/ApiManager';

//Create custom components
const DetailsScreen = () => {

  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
  };

  return (
    <SafeAreaView style={styles.container}>
       <Text style = {styles.welcomeText}>Details</Text>  
      <StatusBar style="auto" />
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
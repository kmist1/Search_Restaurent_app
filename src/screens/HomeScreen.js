//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView, Image} from 'react-native';
import ApiManager from './api/ApiManager';
import CustomRow from './CustomRow';


//Create custom components
const HomeScreen = ({navigation}) => {

  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      // const response = await ApiManager.get('/posts');
      setResults(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style = {styles.welcomeText}> Wecome, guest!</Text>
      <Image
          style={styles.image}
          source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/restaurent.png')}
      />
      
      <Text>we have found : {result.length} results</Text>
    
      <Button title="Find Restaurents near you!"
      onPress={()=>{
        getPost();
      }}/>
      
      <FlatList
                data={result}
                renderItem={({ item }) => <CustomRow
                    id = {item.RestaurentID}
                    address = {item.Address}
                    city = {item.City}
                    navigation = {navigation}
                />}
            />

      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//Export 
export default HomeScreen;


const data = [
  {
    "RestaurentID": 1,
    "Address": "45, Lee St",
    "City": "New Haven"
  },
  {
    "RestaurentID": 2,
    "Address": "4, Canton St",
    "City": "North Haven"
  },
  {
    "RestaurentID": 3,
    "Address": "20, boston post road",
    "City": "west Haven"
  },
  {
    "RestaurentID": 4,
    "Address": "145, wnechester Ave",
    "City": "Bridgport"
  },
  {
    "RestaurentID": 5,
    "Address": "19, Homeside Ave",
    "City": "New York"
  },
  {
    "RestaurentID": 6,
    "Address": "20, boston post road",
    "City": "west Haven"
  },
  {
    "RestaurentID": 7,
    "Address": "4, Canton St",
    "City": "North Haven"
  },
  {
    "RestaurentID": 8,
    "Address": "45, Lee St",
    "City": "New Haven"
  },
  {
    "RestaurentID": 9,
    "Address": "145, wnechester Ave",
    "City": "Bridgport"
  },
  {
    "RestaurentID": 10,
    "Address": "19, Homeside Ave",
    "City": "New York"
  }
];

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
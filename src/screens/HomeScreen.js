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
      const response = await ApiManager.get('/posts');
      setResults(response.data);
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
                    userID={item.userID}
                    id={item.id}
                    title={item.title}
                    body={item.body}
                    navigation = {navigation}
                />}
            />

      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

//Export 
export default HomeScreen;

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
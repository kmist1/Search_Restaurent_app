//Import 
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList, SafeAreaView} from 'react-native';
import ApiManager from './api/ApiManager';
import CustomRow from './CustomRow';

//Create custom components
const HomeScreen = () => {

  

  const [result , setResults]  = useState([]);

  const getPost = async () => {
      const response = await ApiManager.get('/posts');
      setResults(response.data);
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Text>we have found : {result.length} results</Text>
    
      <Button title="Retrieve POST"
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
});
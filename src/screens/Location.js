import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";
import MapView from 'react-native-maps'

const Location =  props => {
  
  return <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}>Locations</Text>
          <MapView        
            style={{flex: 1}}        
            region={{ latitude: 42.882004,longitude: 74.582748,latitudeDelta: 0.0922,longitudeDelta: 0.0421}}        
            showsUserLocation={true}
          />
        </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Location;
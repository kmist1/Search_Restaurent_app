import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { CheckBox } from 'react-native-elements';






const Mycart =  () => {
    
 
  return (
  
  <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}> Thank you!</Text>
          
          <View>
            
          </View>

                        
        </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  
});

export default Mycart;
import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";

const Contact =  props => {
  console.log(props);
  
  return <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}>Contact Us</Text>
        </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    top: '40%'

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Contact;
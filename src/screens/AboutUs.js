import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";
import WebView from 'react-native-webview'


const AboutUs =  props => {
  console.log(props);
  
  return <SafeAreaView style = {styles.container}>
          <WebView source={{ uri: 'https://blog.jscrambler.com' }} style={{ marginTop: 20 }} />
        </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default AboutUs;
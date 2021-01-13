import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const Feedback =  ({navigation}) => {
  
  return (
          <View style = {styles.container}>

            <View>
              <Text style = {styles.section1Text}>What's on your mind?</Text>
            </View>
            <View style = {styles.section2}>
              <View style = {styles.section2Buttons}>
                <Button
                    title = 'AppFeedback'
                    onPress = { () => navigation.navigate('App', {feedbackTitle: 'App'})}
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Food'
                    onPress = { () => navigation.navigate('Food', {feedbackTitle: 'Food'})}
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Service'
                    onPress = { () => navigation.navigate('Service', {feedbackTitle: 'Service'})}
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Other'
                    onPress = { () => navigation.navigate('Other', {feedbackTitle: 'Other'})}
                    style = {styles.section2Buttons}
                  />
              </View>  

            </View>
          </View>
  )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
      },
    section1Text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red'
    },
    section2: {
        alignItems: 'stretch'
    },
    section2Buttons: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default Feedback;
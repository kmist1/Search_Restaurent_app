import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const FeedbackScreen2 =  ({route, navigation}) => {

    const {feedbackTitle} = route.params;
  
  return (
          <View style = {styles.container}>

            <View>
              <Text style = {styles.section1Text}>What's on your mind?</Text>
            </View>
            <View style = {styles.section2}>
              <View style = {styles.section2Buttons}>
                <Button
                    title = 'General Feedback'
                    onPress = { () => navigation.navigate('GeneralFeedback', {feedbackTitle: feedbackTitle}) }
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Specific Location'
                    onPress = { () => navigation.navigate('Specific location')}
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

export default FeedbackScreen2;
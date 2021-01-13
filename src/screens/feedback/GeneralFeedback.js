import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const GeneralFeedback =  ({route, navigation}) => {
    const {feedbackTitle} = route.params;
  return (
          <View style = {styles.container}>

            <View style = {styles.section1}>
              <View style = {styles.section2}>
                  <Text>What</Text>
                  <Text>{feedbackTitle}</Text>
              </View>
              <View style = {styles.section2}>
                    <Text>Why</Text> 
                    <Text>Issue</Text> 
                </View>
            </View>
            <View>
              <View style = {styles.section2Buttons}>
                <TextInput
                    placeholder = "FullName"
                />
              </View>

              <View style = {styles.section2Buttons}>
                <TextInput
                        placeholder = "Email"
                    />
              </View>
              <Text>Feedback</Text>
              <View style = {styles.section2Buttons}>
                <TextInput
                        placeholder = "What's on your mind?"
                    />
              </View>
            </View>


            <Button
                title = "Submit Feedback"
            />
          </View>
  )};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
      },
    section1: {
      flexDirection: 'column',
    },
    section2: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    section2Buttons: {
      borderBottomWidth: StyleSheet.hairlineWidth,
    }
});

export default GeneralFeedback;
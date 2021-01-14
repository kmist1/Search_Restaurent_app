import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const Privacy =  ({navigation}) => {
  
  return (
          <View style = {styles.container}>
            <View style = {styles.section2}>
              <View style = {styles.section2Buttons}>
                <Button
                    title = 'User Agreement'
                    onPress = { () => navigation.navigate('UserAgreement')}
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Privacy Policy'
                    onPress = { () => navigation.navigate('PrivacyPolicy')}
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Online Tracking Opt Out Guide'
                    onPress = { () => navigation.navigate('OnlineTracking')}
                    style = {styles.section2Buttons}
                  
                  />
              </View>

              <View style = {styles.section2Buttons}>
                <Button
                    title = 'Open Source Licences'
                    onPress = { () => navigation.navigate('OpenSourceLicences')}
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

export default Privacy;
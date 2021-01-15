import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Login =  () => {
  
  return <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}>Login</Text>
          <View style = {styles.loginForm}>
                <TextInput
                    style = {styles.loginFormChild}
                    placeholder = "User Name or Email ID"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                />
                <TextInput
                    style = {styles.loginFormChild}
                    placeholder = "Password"
                    underlineColorAndroid = "transparent"
                    placeholderTextColor = "#9a73ef"
                    autoCapitalize = "none"
                />
                <Button
                    title = "Login"
                    onPress = {() => props.navigation.navigate('Order')}
                />
          </View>
          <View style = {styles.section1}>
              
                <Button
                    title = "Create an Account"
                />
              
                <Button
                    title = "Forgot Password?"
                    color = 'skyblue'
                />
              
          </View>
        
          
        </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  loginForm: {
      marginTop: '5%',
      marginBottom: '5%',
      alignContent: 'center',
      justifyContent: 'center'
  },
  loginFormChild: {
        margin: 15,
        height: 40,
        borderColor: 'black',
        borderWidth: 1
  },
  section1: {
      flexDirection: 'row',
      justifyContent: 'space-around'
  },
});

export default Login;
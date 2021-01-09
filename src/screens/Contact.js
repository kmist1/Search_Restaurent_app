import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, Image, TouchableOpacity, Linking} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const Contact =  props => {
  
  const openDialScreen = () => {
    let number = '';
    if (Platform.OS === 'ios') {
      number = 'telprompt:18008888888';
    } else {
      number = 'tel:${+18008888888}';
    }
    Linking.canOpenURL(number)
		.then((supported) => {
			if (!supported) {
				console.error('Can\'t handle url: ' + number);
			} else {
				return Linking.openURL(number)
					.then((data) => console.error("then", data))
					.catch((err) => { throw err; });
			}
		})
		.catch((err) => console.error('An error occurred', err));
  };
  
  return <SafeAreaView style = {styles.container}>

            <Text style = {styles.text}>Contact Us</Text>

            <View style = {styles.rowView}>
              <Image 
                source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/emailLogo.png')}  
                style={{width: 40, height: 40, borderRadius: 60/ 2}} 
              />
                <View style = {styles.colView}>
                  <Text>Email</Text>
                  <Text>Info@gmail.com</Text>
                </View>
            </View>
            
            <TouchableOpacity onPress={() => openDialScreen()}>
              <View style = {styles.rowView}>
                <Image 
                  source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/phoneLogo.png')}  
                  style={{width: 35, height: 35, borderRadius: 60/ 2}} 
                />
                  <View style = {styles.colView}>
                    <Text>Phone</Text>
                    <Text>(800)888-8888</Text>
                  </View>
              </View>
            </TouchableOpacity>
            

            <View style = {styles.rowView}>
              <Image 
                source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/messageLogo.png')}  
                style={{width: 40, height: 40, borderRadius: 60/ 2}} 
              />
                <View style = {styles.colView}>
                  <Text>Message</Text>
                  <TextInput
                    placeholder = "Is there any way to be awarded much for the project?"
                  />
                </View>
            </View>
            <Button
              title = "Submit"
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
  },
  rowView: {
    flexDirection: 'row',
    top: 20,
    marginBottom: '7%',
    borderWidth: 4,
    borderColor: 'black'
  },
  colView: {
    flexDirection: 'column'
  }
});

export default Contact;
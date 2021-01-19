import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, FlatList, TouchableOpacity, ImageBackground} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Menu =  ({navigation}) => {
  
  return <SafeAreaView style = {styles.container}>

            <View style = {styles.textContainer}>
                <Text style = {styles.text}>Menu</Text>
            </View>
            <ScrollView>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Burger')}>
        
                    <ImageBackground source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/burger.jpg')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>Burgers</Text>
                    </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Hotdog')}>

                    <ImageBackground source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/hotdog.jpg')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>HotDogs</Text>
                    </ImageBackground>

                    </TouchableOpacity> 
                    <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Contact')}>

                    <ImageBackground source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/sandwiches.png')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>Sandwiches</Text>
                    </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Contact')}>

                    <ImageBackground source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/fries.jpg')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>Fries</Text>
                    </ImageBackground>

                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity = { .5 } onPress={ () => navigation.navigate('Contact')}>

                    <ImageBackground source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/drinks.png')} style = {styles.ImageClass}>
                        <Text style = {styles.Imagetext}>Drinks</Text>
                    </ImageBackground>

                    </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 25,
    fontWeight: 'bold' 
  },
  textContainer: {
      alignItems: 'center',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
  image: {
    width: 200,
    height: 200,
    borderColor: '#fff',
    borderRadius: 10,
    borderWidth: 4,
    position: 'relative',
    marginBottom: '10%',
    marginTop: '10%'
  },
  textClass: {
      color: '#fff',
      fontFamily: 'sans-serif-thin'
  },

  ImageClass: {
      height: 200,
      width: 400,
      justifyContent: 'center',
      marginBottom: '5%'
  },
  Imagetext: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  },
});

export default Menu;
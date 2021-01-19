import React, {useEffect, useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { CheckBox } from 'react-native-elements';
import RNPickerSelect from "react-native-picker-select";


const RNPicker = ({hid}) => {
  
  return (
    <RNPickerSelect
                    onValueChange={(value) => {
                      if (value == 0) {
                        delete hotdogsBag[hid];
                      }
                      else hotdogsBag[hid] = value;
                    }}
                    style={{
                      ...pickerSelectStyles,
                      iconContainer: {
                        top: 10,
                        right: 12,
                      },
                    }}
                    useNativeAndroidPickerStyle={false}
                    textInputProps={{ underlineColor: 'yellow' }}
                    placeholder={{ label: "Qantity", value: null}}
                    items={[
                        { label: "Delete", value: 0 },
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                        { label: "5", value: 5 },
                        { label: "6", value: 6 },
                        { label: "7", value: 7 },
                        { label: "8", value: 8 },
                        { label: "9", value: 9 },
                    ]}
                />
  );
}

// store the hotdogs id and quantity if it selected.
const hotdogsBag = new Object();




const Hotdogs =  ({navigation}) => {
  
    const [hotdog1, setHotdog1] = useState(false);
    const [hotdog2, setHotdog2] = useState(false);
    const [hotdog3, setHotdog3] = useState(false);
    const [hotdog4, setHotdog4] = useState(false);
    

 
  return (
  
  <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}> Hotdogs you'll LIKE </Text>
          
          <View style = {styles.itemContainer}>
            <CheckBox
                title='Chilli Chees Hotdog -- $7.99'
                checked={hotdog1}
                onPress = {() => setHotdog1(!hotdog1)}
                />
            { hotdog1 ? (
                <View style = {styles.quantityPickerContainer}>
                  <RNPicker hid = "h1"/>
              </View>
            ): null}
            
          </View>
          <View style = {styles.itemContainer}>
            <CheckBox
                    title='Classic Hotdog -- $7.99'
                    checked={hotdog2}
                    onPress = {() => setHotdog2(!hotdog2)}
                    />
                { hotdog2 ? (
                    <View style = {styles.quantityPickerContainer}>
                    <RNPicker hid = "h2"/>
                </View>
                ): null}
          
          </View>
          <View style = {styles.itemContainer}>
            <CheckBox
                    title='Plain Hotdog -- $7.99'
                    checked={hotdog3}
                    onPress = {() => setHotdog3(!hotdog3)}
                    />
                { hotdog3 ? (
                    <View style = {styles.quantityPickerContainer}>
                    <RNPicker hid = "h3"/>
                </View>
                ): null}
          </View>
          <View style = {styles.itemContainer}>
            <CheckBox
                    title='Cajun Hotdog -- $7.99'
                    checked={hotdog4}
                    onPress = {() => setHotdog4(!hotdog4)}
                    />
                { hotdog4 ? (
                    <View style = {styles.quantityPickerContainer}>
                    <RNPicker hid = "h4"/>
                </View>
                ): null}
          </View>

          <View>
              <Button
                title = "Add to Cart"
                onPress = {() => navigation.navigate("Your Cart" ,{hotdogData : [hotdogsBag]})}
              />
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
  itemContainer: {
      flexDirection: 'row'
  },
  quantityPickerContainer: {
    top: 10,
    width: 110,
    height: 40,
  }
  
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});


export default Hotdogs;
import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { CheckBox } from 'react-native-elements';
import RNPickerSelect from "react-native-picker-select";


const RNPicker = ({bid}) => {
  
  return (
    <RNPickerSelect
                    onValueChange={(value) => {
                      burgerBag[bid] = value;
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
                    placeholder={{ label: "Qnt", value: null}}
                    items={[
                        { label: "1", value: 1 },
                        { label: "2", value: 2 },
                        { label: "3", value: 3 },
                        { label: "4", value: 4 },
                    ]}
                />
  );
}

const burgerBag = new Object();



const Burgers =  ({navigation}) => {

    const [burger1, setBurger1] = useState(false);
    const [burger2, setBurger2] = useState(false);
    const [burger3, setBurger3] = useState(false);
    const [burger4, setBurger4] = useState(false);
  
 
  return (
  
  <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}> Juicy Burgers</Text>
          
          <View style = {styles.itemContainer}>
            <CheckBox
                title='Cheesyy Burger -- $7.99'
                checked={burger1}
                onPress = {() => setBurger1(!burger1)}
                />
            { burger1 ? (
                <View style = {styles.quantityPickerContainer}>
                  <RNPicker bid = "b1"/>
              </View>
            ): null}
            
          </View>
          <View style = {styles.itemContainer}>
            <CheckBox
                title='Classic Burger -- $7.99'
                checked={burger2}
                onPress = {() => setBurger2(!burger2)}
                />
            { burger2 ? (
                <View style = {styles.quantityPickerContainer}>
                  <RNPicker bid = "b2"/>
              </View>
            ): null}
          
          </View>
          <View style = {styles.itemContainer}>
            <CheckBox
                title='Double bacon Burger -- $8.99'
                checked={burger3}
                onPress = {() => setBurger3(!burger3)}
                />

            { burger3 ? (
                <View style = {styles.quantityPickerContainer}>
                  <RNPicker bid = "b3"/>
              </View>
            ): null}
          </View>
          <View style = {styles.itemContainer}>
            <CheckBox
                title='Chipotle Burger -- $6.99'
                checked={burger4}
                onPress = {() => setBurger4(!burger4)}
                />
            
            { burger4 ? (
                <View style = {styles.quantityPickerContainer}>
                  <RNPicker bid = "b4"/>
              </View>
            ): null}
          </View>

          <View>
              <Button
                title = "Add to Cart"
                onPress = {() => navigation.navigate("Your Cart", {burgerData : [burgerBag]})}
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


export default Burgers;
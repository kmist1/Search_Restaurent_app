import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";


const OrderScreen =  ({route, navigation}) => {
  const [shouldShow, setShouldShow] = useState(false);
  console.log(route);
  const {id, restaurantAddress} = route.params;
  console.log(restaurantAddress);
  
  return (
    <SafeAreaView style = {styles.container}>
        <Text style = {styles.text}>How do you want your order?</Text>
        <View style = {styles.section1}>
          <View style = {styles.section2}>
            <Image 
              source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/order.png')}  
              style={{width: 50, height: 50, borderRadius: 50/ 2}} 
            />
            
            <View style = {styles.pickerContainer}>
              <RNPickerSelect
                  onValueChange={(value) => {
                    if (value === "Delivery") {
                      setShouldShow(!shouldShow);
                    }
                    else setShouldShow(false);
                  }}
                  placeholder={{ label: "Select order type", value: null }}
                  style={{
                    ...pickerSelectStyles,
                    iconContainer: {
                      top: 10,
                      right: 12,
                    },
                  }}
                  items={[
                      { label: "In-Store Pickup", value: "InStore" },
                      { label: "Mobile Drive Up Window", value: "Mobile" },
                      { label: "Curbside", value: "Curbside" },
                      { label: "Delivery", value: "Delivery" },
                  ]}
              />
              
              
            </View>
          </View>
          <View style = {styles.section2}>
            <Image 
              source={require('/Users/krunalmistry/Desktop/Search_Restaurent_app/assets/clock.jpg')}  
              style={{width: 50, height: 50, borderRadius: 50/ 2}} 
            />
            
            <View style = {styles.pickerContainer}>
              <RNPickerSelect
                  onValueChange={(value) => console.log(value)}
                  placeholder={{ label: "When would you like your order", value: null }}
                  style={{
                    ...pickerSelectStyles,
                  }}
                  items={[
                      { label: "ASAP", value: "ASAP" },
                      { label: "Later", value: "later" },
                  ]}
              />
            </View>
          </View>

           {/*Here we will return the view when state is true 
                and will return false if state is false*/}
                {shouldShow ? (
                  <View style = {styles.hiddenView}>
                    <TextInput
                        placeholder = "Street Address"
                        style = {styles.hiddenTextInput}
                        placeholderTextColor = 'blue'
                    />
                    <TextInput
                        placeholder = "Building name / suite / Apt"
                        style = {styles.hiddenTextInput}
                        placeholderTextColor = 'blue'
                      />
                    
                    <TextInput
                        placeholder = "City"
                        style = {styles.hiddenTextInput}
                        placeholderTextColor = 'blue'
                      />
                    
                    <TextInput
                        placeholder = "ZipCode"
                        style = {styles.hiddenTextInput}
                        placeholderTextColor = 'blue'
                      />
                    <TextInput
                        placeholder = "Delivery Instruction"
                        style = {styles.hiddenTextInput}
                        placeholderTextColor = 'blue'
                      />
                  </View>): null}

          <View style = {styles.submitButton}>
            <Button
              title = "Submit"
              onPress = {()=> navigation.navigate("MENU", {restaurantAddress})}
            />
          </View>
        </View>

        <View style = {{alignSelf: 'center', bottom: -35}}>
            <Text>Selected Restaurant: {restaurantAddress}</Text>
        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    top: 10

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  section1: {
    flexDirection: 'column',
  },
  section2: {
    flexDirection: 'row',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  submitButton: {
    alignSelf: 'center',
    bottom: -30,
    backgroundColor: '#FF6347',
    width: '80%'
  },
  hiddenTextInput: {
    width: '80%',
    height: '13%',
    color: 'black',
    borderColor: 'black',
    borderWidth: 1.5,
  },
  hiddenView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
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
    borderWidth: 1.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 20, // to ensure the text is never behind the icon
  },
});


export default OrderScreen;
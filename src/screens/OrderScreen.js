import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, Image} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RNPickerSelect from "react-native-picker-select";

const OrderScreen =  ({title}) => {
  const [selectedValue, setSelectedValue] = useState("java");
  
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
                  onValueChange={(value) => console.log(value)}
                  placeholder={{ label: "Select order type", value: null }}
                  style = {styles.picker}
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
                  style = {styles.picker}
                  items={[
                      { label: "ASAP", value: "ASAP" },
                      { label: "Later", value: "later" },
                  ]}
              />
            </View>
          </View>

          <View style = {styles.submitButton}>
            <Button
              title = "Submit"
            
            />
          </View>

        </View>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

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
  picker: {
    fontSize: 20
  },
  pickerContainer: {
    top: 20,
    left: 20
  },
  submitButton: {
    alignSelf: 'center',
    top: 600,
    backgroundColor: '#FF6347',
    width: '80%'
  }
});

export default OrderScreen;
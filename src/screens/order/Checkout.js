import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, FlatList, TextInput, Alert} from "react-native";
import RNPickerSelect from "react-native-picker-select";



const Checkout = ({route, navigation, restaurantAddress}) => {
    const {totalAmount} = route.params;
    const [shouldShow, setShouldShow] = useState(false);

    return (
        <SafeAreaView>
            <View style = {styles.section1}>
                <Text>Total Amount to Pay:  ${totalAmount}</Text>
            </View>
            <View style = {styles.section2}>
                <RNPickerSelect
                    onValueChange={(value) => {
                        if (value === "Credit") {
                        setShouldShow(!shouldShow);
                        }
                        else setShouldShow(false);
                    }}
                    placeholder={{ label: "How would you like to pay?", value: null, color: 'White' }}
                    style = {styles.picker}
                    items={[
                        { label: "Credit / Debit", value: "Credit" },
                        { label: "Cash", value: "Cash" },
                    ]}
                />
            </View>
            {/*Here we will return the view when state is true 
                and will return false if state is false*/}
                {shouldShow ? (
                  <View style = {styles.hiddenView}>
                    
                    <View>
                        <Text>Card Number</Text>
                        <TextInput
                            placeholder = "Card Number"
                            style = {styles.hiddenTextInput}
                            placeholderTextColor = 'blue'
                        />
                    </View>
                    
                    <View>
                        <Text>Zip Code</Text>
                        <TextInput
                            placeholder = "Zip code"
                            style = {styles.hiddenTextInput}
                            placeholderTextColor = 'blue'
                        />
                    </View>
                    
                    <View>
                        <Text>CVV</Text>
                        <TextInput
                            placeholder = "3 - digit Code"
                            style = {styles.hiddenTextInput}
                            placeholderTextColor = 'blue'
                        />
                    </View>
                    
                    <View>
                        <Text>Expiry Date</Text>
                        <TextInput
                            placeholder = "Month/Date"
                            style = {styles.hiddenTextInput}
                            placeholderTextColor = 'blue'
                        />
                    </View>        
                  </View>): null}
                  <View style = {styles.section1}>
                      <Text>Placing order at {restaurantAddress}</Text>
                  </View>

                  <View style = {styles.buttonContainer}>
                      <Button
                        title = "Place Order"
                        onPress = {() => Alert.alert("Thank you for ordering food!!")}
                        
                      />
                  </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignContent: 'space-between'
  
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
      },
      section1: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 60
      },
      section2: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 60,
        backgroundColor: 'grey'
      },
      picker: {
        fontSize: 20,
        color: 'white'
      },
      pickerContainer: {
        top: 20,
        left: 20
      },
      submitButton: {
        alignSelf: 'center',
        bottom: -30,
        backgroundColor: '#FF6347',
        width: '80%'
      },
      hiddenTextInput: {
        width: 250,
        height: 40,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1.5,
      },
      hiddenView: {
        justifyContent: 'space-evenly',
        alignContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: 'skyblue',
        borderRadius: 20,
        width: 300,
        height: 400,
        alignSelf: 'center'
      },
    buttonContainer: {
        backgroundColor: 'black',
        color: 'white',
        alignSelf: 'stretch'
    }
    
    
  });
  
  export default Checkout;
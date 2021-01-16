import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, FlatList} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { CheckBox } from 'react-native-elements';
import CartCustomRow from './CartCustomRow';






const Mycart =  ({route, navigation}) => {
    console.log(route);
    const [burgerData] = route.params.burgerData;

    // store burger price according to their order
    const burgerPrices = [7.99, 5.99, 8.99, 6.99 ];

    console.log(burgerData);

    const calcPrice = (burgerData, burgerPrices) => {
      const finalData = [];

      for (const [key, value] of Object.entries(burgerData)) {
        
        switch (key) {
          case 'b1':
            finalData.push(["Cheesy Burger", burgerPrices[0] * value]);
            break;
          case 'b2':
            finalData.push(["Classic Burger", burgerPrices[1] * value]);
            break;
          case 'b3':
            finalData.push(["Double Bacon Burger", burgerPrices[2] * value]);
            break;
          case 'b4':
            finalData.push(["Chipotle Burger", burgerPrices[3] * value]);
            break;
        }
      }
      return finalData;
    }
 
  return (
  
  <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}> Thank you!</Text>
          
          <FlatList
                data={calcPrice(burgerData, burgerPrices)}
                renderItem={({ item, index }) => <CartCustomRow
                    itemName = {item[0]}
                    itemPrice = {item[1]}
                    
                />}
            />

                        
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
  
});

export default Mycart;
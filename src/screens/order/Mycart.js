import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, FlatList} from "react-native";
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
            finalData.push(["Cheesy Burger", burgerPrices[0] * value, value]);
            break;
          case 'b2':
            finalData.push(["Classic Burger", burgerPrices[1] * value, value]);
            break;
          case 'b3':
            finalData.push(["Double Bacon Burger", burgerPrices[2] * value, value]);
            break;
          case 'b4':
            finalData.push(["Chipotle Burger", burgerPrices[3] * value, value]);
            break;
        }
      }
      return finalData;
    }

    const result = calcPrice(burgerData, burgerPrices);

    const taxCalc = (result) => {

      let total = 0;
      let tax = 0

      for (let i = 0; i < result.length; i++) {
        total += result[i][1];
      }
      // 4 % of total tax
      tax = (4/100) * total;
      total += tax;
      return [total.toFixed(2), tax.toFixed(2)];
      
    };

    const totalWithTex = taxCalc(result);
 
  return (
  
  <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}> Thank you!</Text>
          
          <FlatList
                data={result}
                renderItem={({ item, index }) => <CartCustomRow
                    itemName = {item[0]}
                    itemPrice = {item[1]}
                    numberOfItems = {item[2]}
                    
                />}
            />
          <View style = {styles.subSection2}>
            <Text>Tax:    ${totalWithTex[1]}</Text>
            <Text>Total Amount:    ${totalWithTex[0]}</Text>
          </View>
          <View style = {styles.checkOutButton}>
            <Button
              title = "Check Out"
              color = 'white'
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
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  subSection2: {
    backgroundColor: 'skyblue',
  },

  checkOutButton: {
    backgroundColor: 'black',
    width: '100%'
  }
  
});

export default Mycart;
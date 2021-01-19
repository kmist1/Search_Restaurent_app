import React, {useState} from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button, FlatList} from "react-native";
import CartCustomRow from './CartCustomRow';







const Mycart =  ({route, navigation}) => {
    console.log('routeData in cart',route);
    const finalData = [];

    if ("burgerData" in route.params) {
      var [burgerData] = route.params.burgerData
    };
    if ("hotdogData" in route.params) {
      var [hotdogData] = route.params.hotdogData;
      console.log('hotdogData--------', hotdogData);
    };

    
    
    

    // store burger price according to their order
    const burgerPrices = [7.99, 5.99, 8.99, 6.99 ];
    const hotdogPrices = [7.99, 6.99, 4.99, 7.99 ];

    console.log(burgerData);

    const calcPrice = (burgerData, burgerPrices, hotdogData, hotdogPrices, finalData) => {
      

      if (burgerData) {
        for (const [key, value] of Object.entries(burgerData)) {
        
          switch (key) {
            case 'b1':
              finalData.push({'id': 'b1', 'itemName': 'Cheesy Burger', 'itemPrice' : (burgerPrices[0] * value).toFixed(2), 'itemQnt': value});
              break;
            case 'b2':
              finalData.push({'id': 'b2', 'itemName': 'Classic Burger', 'itemPrice' : (burgerPrices[1] * value).toFixed(2), 'itemQnt': value});
              break;
            case 'b3':
              finalData.push({'id': 'b3', 'itemName': 'Double Bacon Burger', 'itemPrice' : (burgerPrices[2] * value).toFixed(2), 'itemQnt': value}); 
              break;
            case 'b4':
              finalData.push({'id': 'b4', 'itemName': 'Chipotle Burger', 'itemPrice' : (burgerPrices[3] * value).toFixed(2), 'itemQnt': value});
              break;
          }
        }
      }



      // if (hotdogData) {
      //   for (const [key, value] of Object.entries(hotdogData)) {
        
      //     switch (key) {
      //       case 'h1':
      //         finalData.push(["Chilli Cheess Hotdog", (hotdogPrices[0] * value).toFixed(2), value]);
      //         break;
      //       case 'h2':
      //         finalData.push(["Classic Hotdog", (hotdogPrices[1] * value).toFixed(2), value]);
      //         break;
      //       case 'h3':
      //         finalData.push(["Plain Hotdog", (hotdogPrices[2] * value).toFixed(2), value]);
      //         break;
      //       case 'h4':
      //         finalData.push(["Cajun Hotdog", (hotdogPrices[3] * value).toFixed(2), value]);
      //         break;
      //     }
      //   }
      // }

      return finalData;
    }

    const result = calcPrice(burgerData, burgerPrices, hotdogData, hotdogPrices, finalData);
    

    const taxCalc = (result) => {

      let total = 0;
      let tax = 0;

      for (let i = 0; i < result.length; i++) {
        total += parseInt(result[i][1]);
      }
      // 4 % of total tax
      tax = (4/100) * total;
      total += tax;
      return [total, tax.toFixed(2)];
      
    };

    const totalWithTex = taxCalc(result);
 
  return (
  
  <SafeAreaView style = {styles.container}>

          <Text style = {styles.text}> Thank you!</Text>
          
          <FlatList
                data={result}
                renderItem={({ item }) => <CartCustomRow
                    itemID = {item.id}
                    itemName = {item.itemName}
                    itemPrice = {item.itemPrice}
                    numberOfItems = {item.itemQnt}
                    
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
              onPress = {() => navigation.navigate('Check Out',  {totalAmount: totalWithTex[0]})}
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
    bottom: 40
  },

  checkOutButton: {
    backgroundColor: 'black',
    width: '100%',
    bottom: 40
  }
  
});

export default Mycart;
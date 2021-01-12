import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";

const OrderScreen =  ({title}) => {
  
  return (
    <View style = {styles.container}>
        <Text>title: {title}</Text>
      <Text>OrderHere</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default OrderScreen;
import React from "react";
import { SafeAreaView ,View, Text, StyleSheet, Button} from "react-native";

const Playground =  props => {
  
  return (
    <View style = {{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    }}>
      <View
        style = {{
          backgroundColor: 'dodgerblue',
          width: 100,
          height: 100,

        }}
      />
      <View
        style = {{
          backgroundColor: 'gold',
          width: 100,
          height: 100,
          top: 20,
          left: 20,
          position: 'relative'
        }}
      />
      <View
        style = {{
          backgroundColor: 'tomato',
          width: 100,
          height: 100,
        }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default Playground;
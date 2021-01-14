import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    subContainer: {
        borderBottomWidth: StyleSheet.hairlineWidth,
        width: 350
    }
    
});

const CustomRow = ({id, address, city, navigation}) => (
    <View style={styles.container}>
        <View style = {styles.subContainer}>
            <TouchableOpacity onPress = {()=> navigation.navigate("DetailScreen", {id: id, address: address, city: city})}>
                <Text style = {{fontSize: 20}}>
                    Restaurent: {id}
                </Text>
                <Text style = {{fontWeight: 'bold', fontSize: 20}}>
                    Address : {address}
                </Text>
                <Text>
                    City : {city}
                </Text>
            </TouchableOpacity> 
        </View> 
    </View>
);

export default CustomRow;
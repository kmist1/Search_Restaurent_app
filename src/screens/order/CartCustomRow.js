import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

const CartCustomRow = ({itemName, itemPrice}) => (
    <View style={styles.container}>
        <View style = {styles.subContainer}>
            <Text>{itemName}</Text>
            <Text>{itemPrice}</Text>
        </View>
    </View>
);

export default CartCustomRow;
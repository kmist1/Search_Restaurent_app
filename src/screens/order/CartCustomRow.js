import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import addingToCart from '/Users/krunalmistry/Desktop/Search_Restaurent_app/API/firebaseMethods.js'


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    deleteItem: {
        width: 30,
        height: 30,
        top: -5
    }
});


const CartCustomRow = ({itemName, itemPrice, numberOfItems}) => {

    addingToCart({itemName, itemPrice, numberOfItems});

    return (
        <View style={styles.container}>
            
                <View style = {styles.subContainer}>
                    <Text>{itemName}</Text>
                    <Text>x   {numberOfItems}</Text>
                    <Text>=   ${itemPrice}</Text>
                </View>
            
        </View>
    );
}
export default CartCustomRow;
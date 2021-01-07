import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 16,
        color: '#000',
    },
    container_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    photo: {
        height: 50,
        width: 50,
    },
});

const CustomRow = ({ userID, id, title, body }) => (
    <View style={styles.container}>
            <Text>
                id: {id}
            </Text>
            <Text style = {{fontWeight: 'bold', fontSize: 20}}>
                title: {title}
            </Text>
            <Text>
                body: {body}
            </Text>
    </View>
);

export default CustomRow;
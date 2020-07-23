import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalData = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.actionDelete.bind(this, props.id)}>
            <View style={styling.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styling = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        backgroundColor: '#ccc',
        height: 20
    }
});
export default GoalData;
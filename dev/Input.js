import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
    const [inputGoal, setGoal] = useState('');

    const inputHandler = (val) => {
        setGoal(val);
    };

    const cancelHandler = () => {
        props.onCancel(false);
        setGoal('');
    };

    const submitHandler = () => {
        props.actionSubmit(inputGoal);
        setGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styling.inputContainer}>
                <TextInput placeholder="Input Goal here" style={styling.input} onChangeText={inputHandler} value={inputGoal} />
                <View style={styling.buttonContainer}>
                    <View style={styling.button}>
                        <Button title="CANCEL" color="red" onPress={cancelHandler} />
                    </View>
                    <View style={styling.button}>
                        <Button style={{ width: '40%' }} color="green" title="ADD" onPress={submitHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styling = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%',
    },
    button:{
        width: '40%'
    }
});

export default GoalInput;
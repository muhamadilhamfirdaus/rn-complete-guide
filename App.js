import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';

import GoalData from './dev/Goals';
import GoalInput from './dev/Input';

export default function App() {
  const [goalData, setListGoal] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const submitHandler = (inputData) => {
    if (inputData === ''){
      console.log('Data tidak ada')
      return;
    }
    setListGoal(currentData => [...currentData, { id: Math.random().toString(), value: inputData }]);
    setModalVisible(false);
  }

  const deleteHandler = (goalID) => {
    setListGoal(currentData => {
      return currentData.filter((data) => data.id !== goalID);
    });
  }

  const cancelHandler = () => {
    setModalVisible(false);
  }

  return (
    <View style={styling.mainScreen}>
      <Button title="Add Goal" onPress={() => setModalVisible(true)}/>
      <GoalInput actionSubmit={submitHandler} visible={modalVisible} onCancel={cancelHandler}/>
      <FlatList
        style={styling.listContainer}
        data={goalData}
        keyExtractor={(item, index) => item.id}
        renderItem={goalData => <GoalData id={goalData.item.id} title={goalData.item.value} actionDelete={deleteHandler} />}
      />
    </View>
  );
}

const styling = StyleSheet.create({
  mainScreen: {
    padding: 50,
  },

  listContainer: {
    marginTop: 10
  },
});
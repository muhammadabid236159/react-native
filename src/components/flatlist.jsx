import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const StudentList = ({ students }) => {
  return (
    <FlatList
      data={students}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>Age: {item.age}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default StudentList;

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
  },

  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
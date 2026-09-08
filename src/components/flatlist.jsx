import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const App = () => {

  const students = [
    { id: '1', name: 'Abid', age: 22 },
    { id: '2', name: 'Ali', age: 21 },
    { id: '3', name: 'Ahmed', age: 23 },
  ];

  return (
    <View style={styles.container}>

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

    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

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
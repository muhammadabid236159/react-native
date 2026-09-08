import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Style = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}
    >
      {/* Internal CSS */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'black',
          marginBottom: 20,
        }}
      >
        Hello React Native
      </Text>

      {/* External CSS */}
      <View style={styles.container}>
        <Text style={styles.text}>External CSS</Text>
      </View>
    </View>
  );
};

export default Style;

// External CSS
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'blue',
  },
});
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';

const Useeffecthookpart2 = () => {
  const [count, setcounter] = useState(0);
  const [score, setScore] = useState(20);
useEffect(() => {
  console.log('hook called - Count:', count, 'Score:', score);
}, [count, score]);
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>useEffect Hook Part 2</Text>

      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.label}>Counter</Text>
          <Text style={styles.value}>{count}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Score</Text>
          <Text style={styles.value}>{score}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#3b82f6'}]}
        onPress={() => setcounter(count + 1)}>
        <Text style={styles.buttonText}>Counter + 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, {backgroundColor: '#8b5cf6'}]}
        onPress={() => setScore(score + 10)}>
        <Text style={styles.buttonText}>Score + 1</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#6b7280',
    fontWeight: '500',
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 6,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Useeffecthookpart2;
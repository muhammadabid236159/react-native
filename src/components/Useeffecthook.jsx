import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native';

const UseEffectHook = () => {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(0);

  // Runs on every render
  useEffect(() => {
    console.log('Component rendered! Count:', count);
  });

  // Runs only once (on mount)
  useEffect(() => {
    console.log('Component Mounted!');

    return () => {
      console.log('Component Unmounted!');
    };
  }, []);

  // Runs when 'count' changes
  useEffect(() => {
    console.log('Count changed to:', count);
  }, [count]);

  // Timer example - runs on mount, cleans up on unmount
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Header */}
        <Text style={styles.heading}>useEffect Hook</Text>
        <Text style={styles.subHeading}>Check c  onsole for logs</Text>

        {/* Timer */}
        <View style={styles.timerBox}>
          <Text style={styles.timerLabel}>Live Timer</Text>
          <Text style={styles.timerValue}>{timer}s</Text>
        </View>

        {/* Counter */}
        <View style={styles.counterBox}>
          <Text style={styles.counterLabel}>Counter</Text>
          <Text style={styles.counterValue}>{count}</Text>
        </View>

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.decrementBtn]}
            onPress={() => setCount(count - 1)}>
            <Text style={styles.buttonText}>- 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.resetBtn]}
            onPress={() => setCount(0)}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.incrementBtn]}
            onPress={() => setCount(count + 1)}>
            <Text style={styles.buttonText}>+ 1</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 32,
  },
  timerBox: {
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 32,
  },
  timerLabel: {
    fontSize: 14,
    color: '#2563eb',
    fontWeight: '500',
  },
  timerValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1d4ed8',
    marginTop: 8,
  },
  counterBox: {
    backgroundColor: '#f3f4f6',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 32,
  },
  counterLabel: {
    fontSize: 14,
    color: '#4b5563',
    fontWeight: '500',
  },
  counterValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1f2937',
    marginTop: 8,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  decrementBtn: {
    backgroundColor: '#ef4444',
  },
  resetBtn: {
    backgroundColor: '#9ca3af',
  },
  incrementBtn: {
    backgroundColor: '#22c55e',
  },
});

export default UseEffectHook;

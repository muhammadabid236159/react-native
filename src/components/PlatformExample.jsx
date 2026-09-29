import { View, Text, StyleSheet, Platform } from 'react-native'
import React from 'react'

const PlatformExample = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Platform Example</Text>

      <View style={styles.card}>
        <Text style={styles.label}>OS:</Text>
        <Text style={styles.value}>{Platform.OS}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Version:</Text>
        <Text style={styles.value}>{Platform.Version}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Is Android:</Text>
        <Text style={styles.value}>{Platform.OS === 'android' ? 'Yes' : 'No'}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Is iOS:</Text>
        <Text style={styles.value}>{Platform.OS === 'ios' ? 'Yes' : 'No'}</Text>
      </View>

      <View style={[styles.card, styles.highlightCard]}>
        <Text style={styles.highlightText}>
          {Platform.select({
            android: 'You are on Android',
            ios: 'You are on iOS',
            default: 'Unknown Platform',
          })}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 15,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  highlightCard: {
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  highlightText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default PlatformExample

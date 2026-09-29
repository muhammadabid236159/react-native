import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>

      <View style={styles.hero}>
        <Text style={styles.emoji}>🏠</Text>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.subtitle}>Welcome to the app!</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('About', {
          name: 'Muhammad Abid',
          version: '1.0.0',
          framework: 'React Native',
          message: 'Hello from Home Screen!',
        })}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>Go to About →</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    padding: 24,
    justifyContent: 'space-between',
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  btn: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginBottom: 16,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default HomeScreen

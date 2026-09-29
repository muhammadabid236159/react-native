import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const AboutScreen = ({ navigation, route }) => {
  const { name, version, framework, message } = route.params

  return (
    <View style={styles.container}>

      <View style={styles.hero}>
        <Text style={styles.emoji}>ℹ️</Text>
        <Text style={styles.title}>About Screen</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Developer</Text>
        <Text style={styles.infoValue}>{name}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Version</Text>
        <Text style={styles.infoValue}>{version}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>Framework</Text>
        <Text style={styles.infoValue}>{framework}</Text>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <Text style={styles.btnText}>← Go Back</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f7',
    padding: 24,
  },
  hero: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
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
  message: {
    fontSize: 15,
    color: '#6200ee',
    fontStyle: 'italic',
  },
  infoCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  infoLabel: {
    fontSize: 15,
    color: '#555',
    fontWeight: '600',
  },
  infoValue: {
    fontSize: 15,
    color: '#6200ee',
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#333',
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default AboutScreen

import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'http://192.168.1.11:3000/users'

const Api = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(API_URL)
        setData(response.data)
      } catch (requestError) {
        console.error('Users API error:', requestError.message)
        setError(`${requestError.message} - ${API_URL}`)
      }
    }
    getUsers()
  }, [])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>API</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {!error && !data.length ? (
          <Text style={styles.text}>Loading data...</Text>
        ) : null}

        {data.map((user) => (
          <View style={styles.card} key={user.id}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Age: {user.age}</Text>
            <Text style={styles.text}>City: {user.city}</Text>
            <Text style={styles.role}>{user.role}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f2f4f7',
    padding: 20,
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    padding: 18,
    marginBottom: 12,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 8,
  },
  text: {
    fontSize: 15,
    color: '#6b7280',
    marginBottom: 4,
  },
  role: {
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
    backgroundColor: '#e0f2fe',
    color: '#0369a1',
    fontWeight: '600',
  },
  error: {
    color: '#dc2626',
    textAlign: 'center',
    marginBottom: 12,
  },
})

export default Api
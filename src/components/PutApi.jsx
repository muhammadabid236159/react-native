import React, { useState } from 'react'
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Button,
} from 'react-native'
import axios from 'axios'

const API_URL = 'http://192.168.1.11:3000/users'

const EMPTY_FORM = {
  id: '',
  name: '',
  email: '',
  age: '',
  city: '',
  role: '',
}

const PutApi = () => {
  const [form, setForm] = useState(EMPTY_FORM)
  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const handleSubmit = async () => {
    const id = form.id.trim()

    if (!id || !form.name.trim() || !form.email.trim()) {
      Alert.alert('Error', 'ID, Name aur Email required hain')
      return
    }

    const user = {
      id: id,
      name: form.name.trim(),
      email: form.email.trim(),
      age: form.age.trim() ? Number(form.age) : '',
      city: form.city.trim(),
      role: form.role.trim(),
    }

    setIsSaving(true)

    try {
      await axios.put(`${API_URL}/${id}`, user)

      Alert.alert('Success', 'User update ho gaya')

      setForm(EMPTY_FORM)
    } catch (error) {
      Alert.alert(
        'Error',
        error.response
          ? `Server Error: ${error.response.status}`
          : error.message
      )
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Update User</Text>

        <Text>ID</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ID"
          value={form.id}
          onChangeText={value => handleChange('id', value)}
        />

        <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={form.name}
          onChangeText={value => handleChange('name', value)}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={form.email}
          onChangeText={value => handleChange('email', value)}
          keyboardType="email-address"
        />

        <Text>Age</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Age"
          value={form.age}
          onChangeText={value => handleChange('age', value)}
          keyboardType="numeric"
        />

        <Text>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter City"
          value={form.city}
          onChangeText={value => handleChange('city', value)}
        />

        <Text>Role</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Role"
          value={form.role}
          onChangeText={value => handleChange('role', value)}
        />

        <Button
          title={isSaving ? 'Updating...' : 'Update User'}
          onPress={handleSubmit}
          disabled={isSaving}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    borderRadius: 5,
  },
})

export default PutApi
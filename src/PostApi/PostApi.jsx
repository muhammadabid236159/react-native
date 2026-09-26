import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const API_URL = 'http://192.168.1.11:3000/users'

const PostApi = () => {
  const [form, setForm] = useState({
    id: 7,
    name: '',
    email: '',
    age: '',
    city: '',
    role: '',
  })

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value })
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      Alert.alert('Warning', 'Name and Email are required!')
      return
    }
    try {
      const data = {
        ...form,
        age: Number(form.age),
      }
      await axios.post(API_URL, data)
      Alert.alert('Success', 'User added successfully!')
      setForm({ id: '7', name: '', email: '', age: '', city: '', role: '' })
    } catch (error) {
      console.log(error.message)
      Alert.alert('Error', 'Could not connect to server')
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add User</Text>
        <Text style={styles.headerSubtitle}>Fill in the details below</Text>
      </View>

      {/* Scrollable Form */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">

        <View style={styles.card}>

          {/* ID + Name */}
          <View style={styles.row}>
            <View style={[styles.inputWrap, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>ID</Text>
              <TextInput
                style={styles.input}
                placeholder="ID"
                placeholderTextColor="#bbb"
                value={form.id}
                onChangeText={text => handleChange('id', Number(text) )}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputWrap, { flex: 2 }]}>
              <Text style={styles.label}>Name *</Text>
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor="#bbb"
                value={form.name}
                onChangeText={text => handleChange('name', text)}
              />
            </View>
          </View>

          {/* Email */}
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              placeholder="example@email.com"
              placeholderTextColor="#bbb"
              value={form.email}
              onChangeText={text => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Age + City */}
          <View style={styles.row}>
            <View style={[styles.inputWrap, { flex: 1, marginRight: 8 }]}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                placeholder="Age"
                placeholderTextColor="#bbb"
                value={form.age}
                onChangeText={text => handleChange('age', text)}
                keyboardType="numeric"
              />
            </View>
            <View style={[styles.inputWrap, { flex: 2 }]}>
              <Text style={styles.label}>City</Text>
              <TextInput
                style={styles.input}
                placeholder="City"
                placeholderTextColor="#bbb"
                value={form.city}
                onChangeText={text => handleChange('city', text)}
              />
            </View>
          </View>

          {/* Role */}
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Role</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g. Admin, User"
              placeholderTextColor="#bbb"
              value={form.role}
              onChangeText={text => handleChange('role', text)}
            />
          </View>

          <TouchableOpacity style={styles.btn} onPress={handleSubmit} activeOpacity={0.8}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#6200ee',
  },
  header: {
    backgroundColor: '#6200ee',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  headerTitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  headerSubtitle: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 14,
    marginTop: 4,
  },
  scrollContent: {
    flexGrow: 1,
    backgroundColor: '#f2f2f7',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    paddingBottom: 40,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  inputWrap: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#444',
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#333',
    backgroundColor: '#fafafa',
  },
  btn: {
    backgroundColor: '#6200ee',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default PostApi
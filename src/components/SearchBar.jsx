import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const contacts = [
  { id: 1, name: 'Aman', phone: '9876543210' },
  { id: 2, name: 'Riya', phone: '9123456780' },
  { id: 3, name: 'Kabir', phone: '9988776655' },
  { id: 4, name: 'Neha', phone: '9765432109' },
  { id: 5, name: 'Zaid', phone: '9654321987' },
]

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase().trim())
  )

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: '#111' }}>Contacts</Text>

      <TextInput
        placeholder='Search your contact'
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor='#999'
        style={{
          height: 48,
          borderWidth: 1,
          borderColor: '#d9d9d9',
          borderRadius: 12,
          paddingHorizontal: 14,
          paddingVertical: 10,
          marginBottom: 16,
          backgroundColor: '#f7f7f7',
          fontSize: 16,
          color: '#111',
          elevation: 2,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.08,
          shadowRadius: 2,
        }}
      />

      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <View key={contact.id} style={{ paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#eee' }}>
            <Text style={{ fontSize: 18, color: '#111', fontWeight: '500' }}>{contact.name}</Text>
            <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>{contact.phone}</Text>
          </View>
        ))
      ) : (
        <Text style={{ color: '#a52a2a', textAlign: 'center', marginTop: 20, fontSize: 15 }}>No contact found</Text>
      )}
    </View>
  )
}

export default SearchBar

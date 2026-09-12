import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import contacts from './usercontactlist';
import UserContactList from '../src/components/UserContactList';

const ContactListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 15,
        backgroundColor: '#4a90d9',
        color: 'white',
      }}>
        Contact List
      </Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <UserContactList contact={item} />}
      />
    </SafeAreaView>
  );
};

export default ContactListScreen;


import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import contacts from './usercontactlist';
import Grid from '../src/components/Grid';

const ContactListScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: 15,
          backgroundColor: '#4a90d9',
          color: 'white',
        }}>
        Contact List
      </Text>
      <Grid data={contacts} />
    </SafeAreaView>
  );
};

export default ContactListScreen;

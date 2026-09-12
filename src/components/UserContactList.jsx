import React from 'react';
import { View, Text } from 'react-native';

const UserContactList = ({ contact }) => {
  return (
    <View style={{
      backgroundColor: '#f9f9f9',
      padding: 15,
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#e0e0e0',
    }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
        {contact.name}
      </Text>
      <Text style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
        📞 {contact.phone}
      </Text>
      <Text style={{ fontSize: 14, color: '#666', marginTop: 2 }}>
        ✉️ {contact.email}
      </Text>
    </View>
  );
};

export default UserContactList;
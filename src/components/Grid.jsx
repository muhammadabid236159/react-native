import React from 'react';
import { View, Text, Dimensions, ScrollView } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const itemSize = screenWidth / 2 - 20;

const Grid = ({ data }) => {
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          paddingTop: 10,
        }}>
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#f0f0f0',
              width: itemSize,
              height: itemSize,
              margin: 8,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: '#ddd',
            }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
              {item.name}
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginTop: 5 }}>
              📞 {item.phone}
            </Text>
            <Text style={{ fontSize: 13, color: '#666', marginTop: 3 }}>
              ✉️ {item.email}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Grid;

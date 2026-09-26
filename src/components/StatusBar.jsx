import React from 'react';
import { StatusBar as RNStatusBar, View, Text } from 'react-native';

// Simple custom StatusBar component
// You can customize backgroundColor and barStyle as needed.
const StatusBar = () => (
  <View>
    <RNStatusBar
    barStyle={'light-content'} backgroundcolor="red" hidden={false} />
  
    <Text>status bar</Text>
  </View>
);

export default StatusBar;


import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import StatusBar from './src/components/StatusBar';
import PutApi from './src/components/PutApi';

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar />
      <PutApi />
    </SafeAreaProvider>
  );
};

export default App;
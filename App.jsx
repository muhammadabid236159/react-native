import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Loader from './src/components/Loader';

const App = () => {
  return (
    <SafeAreaProvider>
      <Loader />
    </SafeAreaProvider>
  );
};

export default App;
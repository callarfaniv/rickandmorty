import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppContext from './src/context/AppContext';
import useInitialState from './src/hooks/useInitialState';

export default function App() {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState} >
      <SafeAreaProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SafeAreaProvider>
    </AppContext.Provider>
  );
}



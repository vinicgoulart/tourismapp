import React from 'react';
import { Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';

import { Signin } from './src/screens/Signin';

import { LandingPage } from './src/screens/LandingPage';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_700Bold
  });
  
  return (
    fontLoaded ? <Signin /> : <LandingPage /> 
  );
}


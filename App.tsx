import React, { useEffect, useState } from 'react';
import { useFonts } from './src/hooks/useFonts';
import { LinearGradient } from 'expo-linear-gradient';
import SplashScreen from './src/screens/SplashScreen';
import AppNavigator from './src/components/AppNavigator';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsIsReady, setFontsIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        setFontsIsReady(true);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  if (!appIsReady) {
    if (fontsIsReady) return <SplashScreen />;
    else return null;
  }

  return (
    <LinearGradient
      start={{ x: 3, y: 0 }}
      end={{ x: -2, y: 1 }}
      locations={[0.5, 0.5]}
      colors={['#439dff', '#4197ff']}
      style={{ flex: 1 }}
    >
      <AppNavigator />
    </LinearGradient>
  );
}

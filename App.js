import React, { useEffect, useState } from 'react';
import { useFonts } from './src/hooks/useFonts';
import { LinearGradient } from 'expo-linear-gradient';
import { createOvermind } from 'overmind';
import { Provider } from 'overmind-react';
import { config } from './src/overmind';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen';
import ExploreScreen from './src/screens/ExploreScreen';
import StockDetailsScreen from './src/screens/StockDetailsScreen';

const overmind = createOvermind(config, { devtools: false });

const Stack = createNativeStackNavigator();
const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

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
    <Provider value={overmind}>
      <LinearGradient
        start={{ x: 3, y: 0 }}
        end={{ x: -2, y: 1 }}
        locations={[0.5, 0.5]}
        colors={['#439dff', '#4197ff']}
        style={{ flex: 1 }}
      >
        <NavigationContainer theme={mainTheme}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Explore" component={ExploreScreen} />
            {/* <Stack.Screen name="StockDetails" component={StockDetailsScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </LinearGradient>
    </Provider>
  );
}

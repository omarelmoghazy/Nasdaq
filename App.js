import React, { useEffect, useState } from "react";
import { useFonts } from "./src/hooks/useFonts";
import { LinearGradient } from "expo-linear-gradient";

import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "./src/screens/SpashScreen";
import ExploreScreen from "./src/screens/ExploreScreen";

const Stack = createNativeStackNavigator();
const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
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
    <LinearGradient
      start={{ x: 3, y: 0 }}
      end={{ x: -2, y: 1 }}
      locations={[0.5, 0.5]}
      colors={["#439dff", "#4197ff"]}
      style={{ flex: 1 }}
    >
      <NavigationContainer theme={mainTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Explore" component={ExploreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </LinearGradient>
  );
}

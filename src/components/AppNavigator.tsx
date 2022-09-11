import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Ticker } from '../overmind/state';
import ExploreScreen from '../screens/ExploreScreen';
import StockDetailsScreen from '../screens/StockDetailsScreen';
import { Provider } from 'overmind-react';
import { createOvermind } from 'overmind';
import { config } from '../overmind';

export type RootStackParamList = {
  Explore: undefined;
  StockDetails: { stock: Ticker };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const mainTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const overmind = createOvermind(config, { devtools: false });

const AppNavigator = () => {
  const navigatorOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: 'none',
  };
  return (
    <Provider value={overmind}>
      <NavigationContainer theme={mainTheme}>
        <Stack.Navigator initialRouteName="Explore" screenOptions={navigatorOptions}>
          <Stack.Screen name="Explore" component={ExploreScreen} />
          <Stack.Screen name="StockDetails" component={StockDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default AppNavigator;

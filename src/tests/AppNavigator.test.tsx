import * as React from 'react';
import {
  render,
  screen,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import AppNavigator from '../components/AppNavigator';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

describe('Testing react navigation', () => {
  jest.setTimeout(30000);
  beforeEach(async () => {
    const component = <AppNavigator />;
    render(component);

    await waitForElementToBeRemoved(() => screen.getByText('Omar Elmoghazy'), {
      timeout: 10000,
      interval: 1000,
    });
  });

  test('Splash screen disappears after few seconds', async () => {
    const developerName = screen.queryByText('Omar Elmoghazy');
    expect(developerName).not.toBeTruthy();
  });

  test('Clicking on a stock ticker takes you to the Stock Details screen', async () => {
    const component = <AppNavigator />;
    render(component);

    await waitForElementToBeRemoved(() => screen.getByText('Omar Elmoghazy'), {
      timeout: 10000,
      interval: 1000,
    });

    const stocks = await screen.findAllByTestId('stock-card-test');
    const randomIndex = Math.floor(Math.random() * stocks.length);
    const randomStock = stocks[randomIndex];

    fireEvent.press(randomStock);
    await waitFor(() => screen.getByText('Description'), {
      timeout: 10000,
      interval: 1000,
    });
  });
});

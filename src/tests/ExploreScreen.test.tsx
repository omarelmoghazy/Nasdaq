import * as React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';
import { createOvermind } from 'overmind';
import { config } from '../overmind';
import AppNavigator from '../components/AppNavigator';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const overmind = createOvermind(config);

describe('Unit testing for explore screen components', () => {
  jest.setTimeout(30000);
  beforeEach(async () => {
    const component = <AppNavigator />;
    render(component);

    await waitForElementToBeRemoved(() => screen.getByText('Omar Elmoghazy'), {
      timeout: 10000,
      interval: 1000,
    });
  });

  test('Search bar renders correctly', async () => {
    const searchBar = await screen.findByPlaceholderText('Search');
    expect(searchBar).toBeTruthy();
  });

  test('Explore screen always shows some stock tickers', async () => {
    const stocks = await screen.findAllByTestId('stock-card-test');
    expect(stocks.length > 0).toBeTruthy();
  });
});

describe('E2E testing for the search bar', () => {
  jest.setTimeout(30000);
  beforeEach(async () => {
    const component = <AppNavigator />;
    render(component);

    await waitForElementToBeRemoved(() => screen.getByText('Omar Elmoghazy'), {
      timeout: 10000,
      interval: 1000,
    });
  });

  test('Typing in the search bar changes the value', async () => {
    const searchBar = await screen.findByPlaceholderText('Search');
    fireEvent.changeText(searchBar, 'abc');
    expect(searchBar.props.value).toBe('abc');
  });
});

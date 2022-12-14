import React, { Fragment, useState, useEffect, useMemo } from 'react';
import { ActivityIndicator, Keyboard } from 'react-native';
import styled from 'styled-components/native';
import StockCard from '../components/StockCard';
import { FlexSafeAreaView } from '../shared-styles';
import { useActions, useAppState } from '../overmind';
import { Ticker } from '../overmind/state';
import SplashScreen from './SplashScreen';
import SearchBar from '../components/SearchBar';
import Error from '../components/Error';
import TryAgainBtn from '../components/TryAgainBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useError from '../hooks/useError';
import { RootStackParamList } from '../components/AppNavigator';
import ErrorScreen from './ErrorScreen';
import COLORS from '../../assets/colors';

const ScreenContainer = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
  accessible: false,
})`
  height: 100%;
`;

const HeaderSafeAreaView = styled.SafeAreaView`
  background: ${COLORS.EXTRA_PALE_BLACK};
`;

const ContentContainer = styled.FlatList`
  padding: 0 30px;
`;

const LoadMoreIndicator = styled.ActivityIndicator`
  margin-top: 10px;
`;

type ExploreScreenProps = NativeStackScreenProps<RootStackParamList, 'Explore'>;

const ExploreScreen = ({ navigation }: ExploreScreenProps) => {
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(true);
  const { showErrorMessage, setShowErrorMessage, showTryAgainBtn, setShowTryAgainBtn } = useError();
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [reachedEnd, setReachedEnd] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const actions = useActions();
  const state = useAppState();

  const fetchData = async (isCaching: boolean, newSearch?: boolean) => {
    setShowErrorMessage(false);
    setShowTryAgainBtn(false);
    setShowLoadMore(true);
    try {
      const response = await actions.loadTickers({ searchValue, isCaching, newSearch });
      setIsLoadingScreen(false);
      setShowLoadMore(false);
      if (!response) {
        setShowErrorMessage(true);
        setShowTryAgainBtn(true);
      }
    } catch (error) {}
  };
  const onEndReachedHandler = () => {
    setReachedEnd(true);
  };

  const onMomentumScrollEndHandler = () => {
    if (reachedEnd) {
      fetchData(false);
      setReachedEnd(false);
    }
  };

  const onTryAgainHandler = () => {
    setShowErrorMessage(false);
    setShowTryAgainBtn(false);
    fetchData(false);
  };

  const renderStock = ({ item, index }: { item: Ticker; index: number }) => {
    return <StockCard navigation={navigation} key={index} stock={item} withBorder />;
  };

  useEffect(() => {
    if (searchValue === '') {
      const timer = setTimeout(() => {
        fetchData(true);
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      const delayedSearch = setTimeout(() => {
        fetchData(false, true);
      }, 500);
      return () => {
        clearTimeout(delayedSearch);
      };
    }
  }, [searchValue]);

  return (
    <>
      {isLoadingScreen ? (
        <SplashScreen />
      ) : (
        <ScreenContainer>
          <Fragment>
            <HeaderSafeAreaView>
              <SearchBar value={searchValue} setValue={setSearchValue} />
            </HeaderSafeAreaView>
            <FlexSafeAreaView>
              {state.tickers.length === 0 && (
                <ErrorScreen errorText={'No tickers found.'}></ErrorScreen>
              )}
              <ContentContainer
                onMomentumScrollEnd={onMomentumScrollEndHandler}
                onEndReached={onEndReachedHandler}
                data={state.tickers}
                renderItem={renderStock}
              />
              {showErrorMessage && (
                <Error withSearchBar setShowErrorMessage={setShowErrorMessage} />
              )}
              {showLoadMore && <LoadMoreIndicator color={COLORS.WHITE} />}
              {showTryAgainBtn && <TryAgainBtn onPress={onTryAgainHandler} />}
            </FlexSafeAreaView>
          </Fragment>
        </ScreenContainer>
      )}
    </>
  );
};

export default ExploreScreen;

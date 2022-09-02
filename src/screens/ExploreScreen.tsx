import React, { Fragment, useState, useEffect } from 'react';
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

const ScreenContainer = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
  accessible: false,
})`
  height: 100%;
`;

const HeaderSafeAreaView = styled.SafeAreaView`
  background: rgba(0, 0, 0, 0.2);
`;

const ContentContainer = styled.FlatList.attrs((props: { tickers: Ticker[] }) => ({
  data: props.tickers,
  renderItem: ({ item, index }) => {
    return <StockCard key={index} ticker={item.ticker} name={item.name} withBorder />;
  },
}))`
  padding: 0 30px;
`;

const LoadMoreIndicatorContainer = styled.View`
  margin-top: 10px;
`;

const ExploreScreen = () => {
  const [limit, setLimit] = useState<number>(0);
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(true);
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
  const [showTryAgainBtn, setShowTryAgainBtn] = useState<boolean>(false);
  const [showLoadMore, setShowLoadMore] = useState<boolean>(false);
  const [reachedEnd, setReachedEnd] = useState<boolean>(false);
  const actions = useActions();
  const state = useAppState();

  const fetchData = async () => {
    setShowLoadMore(true);
    try {
      const response = await actions.loadTickers(limit + 20);
      setIsLoadingScreen(false);
      setShowLoadMore(false);
      console.log('RESPONSE:', response);
      if (!response) {
        setShowErrorMessage(true);
        setShowTryAgainBtn(true);
      } else {
        setLimit((prevLimit) => prevLimit + 20);
      }
    } catch (error) {}
  };
  const onEndReachedHandler = () => {
    setReachedEnd(true);
  };

  const onMomentumScrollEndHandler = () => {
    if (reachedEnd) {
      fetchData();
      setReachedEnd(false);
    }
  };

  const onTryAgainHandler = () => {
    setShowErrorMessage(false);
    setShowTryAgainBtn(false);
    fetchData();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {isLoadingScreen ? (
        <SplashScreen />
      ) : (
        <ScreenContainer>
          <Fragment>
            <HeaderSafeAreaView>
              <SearchBar />
            </HeaderSafeAreaView>
            <FlexSafeAreaView>
              <ContentContainer
                onMomentumScrollEnd={onMomentumScrollEndHandler}
                onEndReached={onEndReachedHandler}
                tickers={state.tickers}
              />
              {showErrorMessage && <Error setShowErrorMessage={setShowErrorMessage} />}
              {showLoadMore && (
                <LoadMoreIndicatorContainer>
                  <ActivityIndicator color={'#ffffff'} />
                </LoadMoreIndicatorContainer>
              )}
              {showTryAgainBtn && <TryAgainBtn onPress={onTryAgainHandler} />}
            </FlexSafeAreaView>
          </Fragment>
        </ScreenContainer>
      )}
    </>
  );
};

export default ExploreScreen;

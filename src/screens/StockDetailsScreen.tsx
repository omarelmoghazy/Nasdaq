import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';
import Error from '../components/Error';
import StockCard from '../components/StockCard';
import StockInfo from '../components/StockInfo';
import StockPrice from '../components/StockPrice';
import StockStatistics from '../components/StockStatistics';
import TryAgainBtn from '../components/TryAgainBtn';
import useError from '../hooks/useError';
import { useActions, useAppState } from '../overmind';
import { FlexSafeAreaView } from '../shared-styles';
import SplashScreen from './SplashScreen';
import ErrorScreen from './ErrorScreen';
import { RootStackParamList } from '../components/AppNavigator';
import COLORS from '../../assets/colors';
import StockLogo from '../components/StockLogo';

const ScreenScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
})``;

const StockValueContainer = styled.View`
  width: 100%;
  padding: 0 25px 30px;
`;

type StockDetailsScreenProps = NativeStackScreenProps<RootStackParamList, 'StockDetails'>;

const StockDetailsScreen = ({ route }: StockDetailsScreenProps) => {
  const { stock } = route.params;
  const [isLoadingScreen, setIsLoadingScreen] = useState<boolean>(true);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(false);
  const [isErrorScreen, setIsErrorScreen] = useState<boolean>(false);
  const { showErrorMessage, setShowErrorMessage, showTryAgainBtn, setShowTryAgainBtn } = useError();
  const state = useAppState();
  const actions = useActions();

  const checkError = (response: any) => {
    if (!response) {
      setIsErrorScreen(true);
      setShowErrorMessage(true);
      setShowTryAgainBtn(true);
    }
  };

  const fetchData = async () => {
    setShowErrorMessage(false);
    setShowTryAgainBtn(false);
    setIsLoadingData(true);
    try {
      setIsLoadingScreen(false);
      const stockStatisticsResponse = await actions.loadStockStatistics(stock.ticker);
      checkError(stockStatisticsResponse);
      const stockDetailsResponse = await actions.loadStockDetails(stock.ticker);
      checkError(stockDetailsResponse);
      const stockLogoResponse = await actions.loadStockLogo();
      checkError(stockLogoResponse);
      setIsLoadingData(false);
    } catch (error) {}
  };

  const onTryAgainHandler = () => {
    setShowErrorMessage(false);
    setShowTryAgainBtn(false);
    setIsErrorScreen(false);
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
      ) : isErrorScreen ? (
        <ErrorScreen errorText={'Something went wrong!'}>
          {showErrorMessage && <Error setShowErrorMessage={setShowErrorMessage} />}
          {showTryAgainBtn && <TryAgainBtn onPress={onTryAgainHandler} />}
        </ErrorScreen>
      ) : (
        <FlexSafeAreaView>
          {isLoadingData ? (
            <ActivityIndicator color={COLORS.WHITE} />
          ) : (
            <ScreenScrollView>
              <StockLogo logo={state.chosenStockLogo} ticker={stock.ticker} />
              <StockValueContainer>
                <StockCard stock={stock} />
                <StockPrice
                  value={state.chosenStockStatistics?.vw || 'N/A'}
                  bolded
                  raiseUpwards
                  dollarSign
                />
              </StockValueContainer>
              <StockStatistics statistics={state.chosenStockStatistics} />
              <StockInfo
                industry={state.chosenStockDetails?.sic_description}
                description={state.chosenStockDetails?.description}
                link={state.chosenStockDetails?.homepage_url || ''}
              />
            </ScreenScrollView>
          )}
        </FlexSafeAreaView>
      )}
    </>
  );
};

export default StockDetailsScreen;

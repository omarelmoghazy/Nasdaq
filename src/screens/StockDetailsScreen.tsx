import React from 'react';
import styled from 'styled-components/native';
import { SplashScreenLogo } from '../../assets/assets';
import StockCard from '../components/StockCard';
import StockInfo from '../components/StockInfo';
import StockPrice from '../components/StockPrice';
import StockStatistics from '../components/StockStatistics';
import { FlexSafeAreaView } from '../shared-styles';

const ScreenScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    alignItems: 'center',
  },
})``;

const StockLogoContainer = styled.View`
  border-radius: 10px;
  padding: 5px;
  background: rgba(255, 255, 255, 0.3);
  margin-top: 10px;
`;

const StockLogo = styled.Image.attrs({
  source: SplashScreenLogo,
})`
  height: 25px;
  width: 25px;
  resize-mode: contain;
`;

const StockValueContainer = styled.View`
  width: 100%;
  padding: 0 25px 30px;
`;

const StockDetailsScreen = () => {
  return (
    <FlexSafeAreaView>
      <ScreenScrollView>
        <StockLogoContainer>
          <StockLogo />
        </StockLogoContainer>
        <StockValueContainer>
          <StockCard ticker={'AAPL'} name={'Apple Inc.'} />
          <StockPrice value={'145.11'} bolded raiseUpwards dollarSign />
        </StockValueContainer>
        <StockStatistics />
        <StockInfo
          industry={'Computer Hardware'}
          description={
            "Apple Inc. (Apple) designs, manufactures and markets smartphones, personal computers, tablets, wearables and accessories and sells a range of related services. The Company's products include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, HomePod, iPod touch and accessories."
          }
        />
      </ScreenScrollView>
    </FlexSafeAreaView>
  );
};

export default StockDetailsScreen;

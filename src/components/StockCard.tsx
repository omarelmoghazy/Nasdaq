import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import COLORS from '../../assets/colors';
import { Ticker } from '../overmind/state';
import { SmallPaleWhitText } from '../shared-styles';
import { RootStackParamList } from './AppNavigator';

interface StockCardContainerProps {
  withBorder: boolean;
}

const StockCardContainer = styled.View`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom-width: ${(props: StockCardContainerProps) => (props.withBorder ? '1px' : '0')};
  border-bottom-color: ${COLORS.EXTRA_PALE_WHITE};
`;

const StockCardText = styled.Text`
  font-family: 'PoppinsRegular';
  color: ${COLORS.WHITE};
`;

const StockTicker = styled(StockCardText)`
  font-size: 28px;
`;

interface StockCardProps {
  stock: Ticker;
  withBorder?: boolean;
  navigation?: NativeStackNavigationProp<RootStackParamList, 'Explore', undefined>;
}

const StockCard = ({ stock, withBorder, navigation }: StockCardProps) => {
  const onTickerPressHandler = () => {
    if (navigation) {
      navigation.navigate('StockDetails', {
        stock: stock,
      });
    }
  };

  return (
    <StockCardContainer withBorder={withBorder}>
      <TouchableOpacity onPress={onTickerPressHandler} testID={'stock-card-test'}>
        <StockTicker>{stock.ticker}</StockTicker>
        <SmallPaleWhitText>{stock.name}</SmallPaleWhitText>
      </TouchableOpacity>
    </StockCardContainer>
  );
};

export default StockCard;

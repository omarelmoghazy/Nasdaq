import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { SmallPaleWhitText } from '../shared-styles';

interface StockCardContainerProps {
  withBorder: boolean;
}

const StockCardContainer = styled.View`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom-width: ${(props: StockCardContainerProps) => (props.withBorder ? '1px' : '0')};
  border-bottom-color: rgba(255, 255, 255, 0.3);
`;

const StockCardText = styled.Text`
  font-family: 'PoppinsRegular';
  color: #fff;
`;

const StockTicker = styled(StockCardText)`
  font-size: 28px;
`;

interface StockCardProps {
  ticker: string;
  name: string;
  withBorder?: boolean;
}

const StockCard = ({ ticker, name, withBorder }: StockCardProps) => {
  return (
    <StockCardContainer withBorder={withBorder}>
      <TouchableOpacity>
        <StockTicker>{ticker}</StockTicker>
        <SmallPaleWhitText>{name}</SmallPaleWhitText>
      </TouchableOpacity>
    </StockCardContainer>
  );
};

export default StockCard;

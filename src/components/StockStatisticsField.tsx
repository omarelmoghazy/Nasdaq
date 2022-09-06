import React from 'react';
import styled from 'styled-components/native';
import { SmallPaleWhitText } from '../shared-styles';
import StockPrice from './StockPrice';

const StockStatisticsFieldContainer = styled.View`
  width: 50%;
`;

interface StockStatisticsFieldProps {
  title: string;
  value: number | string;
}

const StockStatisticsField = ({ title, value }: StockStatisticsFieldProps) => {
  return (
    <StockStatisticsFieldContainer>
      <SmallPaleWhitText>{title}</SmallPaleWhitText>
      <StockPrice
        value={value}
        valueFontSize={'20px'}
        dollarSign={title !== 'Volume'}
        dollarSignFontSize={'10px'}
      />
    </StockStatisticsFieldContainer>
  );
};

export default StockStatisticsField;

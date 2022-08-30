import React from 'react';
import styled from 'styled-components/native';
import {
  SmallPaleWhitText,
  StockDetailsSectionContainer,
  StockDetailsSectionHeader,
} from '../shared-styles';
import StockPrice from './StockPrice';

const stockDetails = {
  open: '142.01',
  close: '142.01',
  volume: '11.3b',
  high: '147.21',
  low: '140.35',
};

interface StockStatisticsFieldProps {
  index: number;
}

const StockStatisticsField = styled.View`
  margin-left: ${(props: StockStatisticsFieldProps) =>
    props.index === 0 || props.index === 3 ? '0px' : '80px'};
  margin-bottom: 20px;
`;

const StockStatisticsContentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const StockStatistics = () => {
  const renderDetails = () => {
    return (
      <StockStatisticsContentContainer>
        {Object.entries(stockDetails)
          .map(([key, value]) => ({ key, value }))
          .map((detail, index) => {
            return (
              <StockStatisticsField key={index} index={index}>
                <SmallPaleWhitText>{detail.key}</SmallPaleWhitText>
                <StockPrice
                  value={detail.value}
                  valueFontSize={'20px'}
                  dollarSign={detail.key !== 'volume'}
                  dollarSignFontSize={'10px'}
                />
              </StockStatisticsField>
            );
          })}
      </StockStatisticsContentContainer>
    );
  };

  return (
    <StockDetailsSectionContainer>
      <StockDetailsSectionHeader>Statistics</StockDetailsSectionHeader>
      {renderDetails()}
    </StockDetailsSectionContainer>
  );
};

export default StockStatistics;

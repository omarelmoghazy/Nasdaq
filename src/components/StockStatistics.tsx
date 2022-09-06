import React from 'react';
import styled from 'styled-components/native';
import { StockStatistics as StockStatisticsType } from '../overmind/state';
import { StockDetailsSectionContainer, StockDetailsSectionHeader } from '../shared-styles';
import StockStatisticsField from './StockStatisticsField';

const StockStockStatisticsContentContainer = styled.View`
  margin-top: 20px;
`;

const StockStatisticsContentRow = styled.View`
  flex-direction: row;
`;

interface StockStatisticsProps {
  statistics: StockStatisticsType;
}

const StockStatistics = ({ statistics }: StockStatisticsProps) => {
  const renderDetails = () => {
    return (
      <StockStockStatisticsContentContainer>
        <StockStatisticsContentRow>
          <StockStatisticsField title={'Open'} value={statistics?.o || 'N/A'} />
          <StockStatisticsField title={'Close'} value={statistics?.c || 'N/A'} />
        </StockStatisticsContentRow>
        <StockStatisticsContentRow>
          <StockStatisticsField title={'High'} value={statistics?.h || 'N/A'} />
          <StockStatisticsField title={'Low'} value={statistics?.l || 'N/A'} />
        </StockStatisticsContentRow>
        <StockStatisticsContentRow>
          <StockStatisticsField title={'Volume'} value={statistics?.v || 'N/A'} />
        </StockStatisticsContentRow>
      </StockStockStatisticsContentContainer>
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

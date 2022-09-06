import React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';
import {
  SmallPaleWhitText,
  StockDetailsSectionContainer,
  StockDetailsSectionHeader,
} from '../shared-styles';

interface StockInfoProps {
  industry: string | undefined;
  description: string | undefined;
  link: string;
}

const StockInfoContainer = styled(StockDetailsSectionContainer)`
  margin-top: 20px;
`;

const StockInfoHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const VisitWebsiteContainer = styled.TouchableOpacity`
  border-bottom-width: 2px;
  border-bottom-color: #00004d;
`;

const VisitWebsiteText = styled.Text`
  color: #00004d;
  font-size: 12px;
  font-family: 'PoppinsRegular';
`;

const StockInfoFieldContainer = styled.View`
  margin-top: 25px;
`;

const StockInfoFieldContent = styled.Text`
  color: #fff;
  font-size: 16px;
  font-family: 'PoppinsRegular';
  text-overflow: inherit;
`;

const StockInfo = ({ industry, description, link }: StockInfoProps) => {
  const onVisitWebsiteHandler = () => {
    Linking.openURL(link);
  };

  return (
    <StockInfoContainer>
      <StockInfoHeader>
        <StockDetailsSectionHeader>About</StockDetailsSectionHeader>
        {link && (
          <VisitWebsiteContainer onPress={onVisitWebsiteHandler}>
            <VisitWebsiteText>Visit Website</VisitWebsiteText>
          </VisitWebsiteContainer>
        )}
      </StockInfoHeader>
      <StockInfoFieldContainer>
        <SmallPaleWhitText>Industry</SmallPaleWhitText>
        <StockInfoFieldContent>{industry || '**Unknown Industry**'}</StockInfoFieldContent>
      </StockInfoFieldContainer>
      <StockInfoFieldContainer>
        <SmallPaleWhitText>Description</SmallPaleWhitText>
        <StockInfoFieldContent>
          {description || '**No available description**'}
        </StockInfoFieldContent>
      </StockInfoFieldContainer>
    </StockInfoContainer>
  );
};

export default StockInfo;

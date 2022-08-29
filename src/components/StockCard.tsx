import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const StockCardContainer = styled.View`
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.3);
`;

const StockCardText = styled.Text`
  font-family: "PoppinsRegular";
  color: #fff;
`;

const StockTicker = styled(StockCardText)`
  font-size: 24px;
`;

const StockName = styled(StockCardText)`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
`;

interface StockCardProps {
  ticker: string;
  name: string;
}

const StockCard = ({ ticker, name }: StockCardProps) => {
  return (
    <StockCardContainer>
      <TouchableOpacity>
        <StockTicker>{ticker}</StockTicker>
        <StockName>{name}</StockName>
      </TouchableOpacity>
    </StockCardContainer>
  );
};

export default StockCard;

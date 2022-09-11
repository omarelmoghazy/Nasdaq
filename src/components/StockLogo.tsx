import React from 'react';
import styled from 'styled-components/native';
import COLORS from '../../assets/colors';

const StockLogoContainer = styled.View`
  border-radius: 5px;
  background: ${COLORS.EXTRA_PALE_WHITE};
  margin-top: 10px;
  height: 25px;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.Image`
  border-radius: 5px;
  height: 25px;
  width: 25px;
  resize-mode: contain;
`;

const Initials = styled.Text`
  font-family: 'PoppinsBold';
  font-size: 10px;
  margin: 5px;
  color: ${COLORS.WHITE};
`;

interface StockLogoProps {
  logo: any;
  ticker: string;
}

const StockLogo = ({ logo, ticker }: StockLogoProps) => {
  return (
    <StockLogoContainer>
      {logo ? <Logo source={{ uri: logo }} /> : <Initials>{ticker}</Initials>}
    </StockLogoContainer>
  );
};

export default StockLogo;

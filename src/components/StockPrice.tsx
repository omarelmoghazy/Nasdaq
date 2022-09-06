import React from 'react';
import styled from 'styled-components/native';

interface StockPriceContainerProps {
  raiseUpwards: boolean;
}

interface StockValueProps {
  fontSize: string;
  bolded: boolean;
}

interface StockPriceProps {
  value: number | string;
  bolded?: boolean;
  valueFontSize?: string;
  raiseUpwards?: boolean;
  dollarSign?: boolean;
  dollarSignFontSize?: string;
}

const StockPriceContainer = styled.View`
  flex-direction: row;
  margin-top: ${(props: StockPriceContainerProps) => (props.raiseUpwards ? '-15px' : '0')};
`;

const DollarSign = styled.Text`
  font-size: ${(props: { fontSize: string }) => (props.fontSize ? props.fontSize : '12px')};
  font-family: 'PoppinsRegular';
  color: #fff;
`;

const StockValue = styled.Text`
  font-size: ${(props: StockValueProps) => (props.fontSize ? props.fontSize : '36px')};
  font-family: ${(props: StockValueProps) => (props.bolded ? 'PoppinsBold' : 'PoppinsRegular')};
  color: #fff;
`;

const StockPrice = ({
  value,
  bolded,
  valueFontSize,
  raiseUpwards,
  dollarSign,
  dollarSignFontSize,
}: StockPriceProps) => {
  return (
    <StockPriceContainer raiseUpwards={raiseUpwards}>
      {dollarSign && <DollarSign fontSize={dollarSignFontSize}>$</DollarSign>}
      <StockValue fontSize={valueFontSize} bolded={bolded}>
        {value}
      </StockValue>
    </StockPriceContainer>
  );
};

export default StockPrice;

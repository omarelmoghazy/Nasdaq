import React from 'react';
import styled from 'styled-components/native';

const TryAgainBtnContainer = styled.TouchableOpacity`
  border: 2px solid #ffff00;
  border-radius: 10px;
  align-self: center;
  padding: 5px;
  margin-top: 10px;
`;

const TryAgainBtnText = styled.Text`
  color: #ffff00;
  font-family: 'PoppinsBold';
  font-size: 14px;
`;

interface ErrorProps {
  onPress: () => void;
}

const TryAgainBtn = ({ onPress }: ErrorProps) => {
  return (
    <TryAgainBtnContainer onPress={onPress}>
      <TryAgainBtnText>Try again</TryAgainBtnText>
    </TryAgainBtnContainer>
  );
};

export default TryAgainBtn;

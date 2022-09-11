import React from 'react';
import styled from 'styled-components/native';
import COLORS from '../../assets/colors';

const TryAgainBtnContainer = styled.TouchableOpacity`
  border: 2px solid ${COLORS.YELLOW};
  border-radius: 10px;
  align-self: center;
  padding: 5px;
  margin-top: 10px;
`;

const TryAgainBtnText = styled.Text`
  color: ${COLORS.YELLOW};
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

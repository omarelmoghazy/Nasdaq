import React from 'react';
import styled from 'styled-components/native';
import { ErrorImageJPG } from '../../assets/assets';
import COLORS from '../../assets/colors';

const ErrorImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const ErrorImage = styled.Image`
  width: 300px;
  height: 300px;
  resize-mode: contain;
`;

const ErrorText = styled.Text`
  font-family: 'PoppinsBold';
  font-size: 20px;
  color: ${COLORS.WHITE};
`;

interface ErrorScreenProps {
  children?: React.ReactNode;
  errorText: string;
}

const ErrorScreen = ({ errorText, children }: ErrorScreenProps) => {
  return (
    <ErrorImageContainer>
      <ErrorImage source={ErrorImageJPG} />
      <ErrorText>{errorText}</ErrorText>
      {children}
    </ErrorImageContainer>
  );
};

export default ErrorScreen;

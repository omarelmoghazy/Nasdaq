import React from 'react';
import styled from 'styled-components/native';
import { ErrorImageJPG } from '../../assets/assets';

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

interface ErrorScreenProps {
  children?: React.ReactNode;
}

const ErrorScreen = ({ children }: ErrorScreenProps) => {
  return (
    <ErrorImageContainer>
      <ErrorImage source={ErrorImageJPG} />
      {children}
    </ErrorImageContainer>
  );
};

export default ErrorScreen;

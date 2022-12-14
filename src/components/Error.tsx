import React, { useRef, useEffect } from 'react';
import { Animated, Linking, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../../assets/colors';

const ErrorContainer = styled(Animated.View)`
  background: ${COLORS.PALE_BLACK};
  width: 90%;
  border-radius: 10px;
  padding: 15px;
  align-self: center;
  position: absolute;
  top: ${(props: { withSearchBar?: boolean }) => (props.withSearchBar ? '20px' : '60px')};
`;

const ErrorText = styled.Text`
  font-size: '16px';
  font-family: 'PoppinsRegular';
  color: ${COLORS.WHITE};
`;

const ErrorLink = styled(ErrorText)`
  color: ${COLORS.YELLOW};
`;

const CloseIconContainer = styled.View`
  position: absolute;
  top: 5px;
  right: 5px;
`;

interface ErrorProps {
  withSearchBar?: boolean;
  setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

const Error = ({ withSearchBar, setShowErrorMessage }: ErrorProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
    let timer1 = setTimeout(() => {
      fadeOut();
    }, 5000);
    let timer2 = setTimeout(() => {
      setShowErrorMessage(false);
    }, 5300);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const onCloseHandler = () => {
    setShowErrorMessage(false);
  };

  const onClickUpgradeHandler = () => {
    Linking.openURL('https://polygon.io/pricing');
  };

  return (
    <ErrorContainer
      withSearchBar={withSearchBar}
      style={[
        {
          opacity: fadeAnim,
        },
      ]}
    >
      <CloseIconContainer>
        <TouchableOpacity onPress={onCloseHandler}>
          <Ionicons name="close-circle" size={16} color="white" />
        </TouchableOpacity>
      </CloseIconContainer>
      <ErrorText>
        You've exceeded the maximum requests per minute, please wait or{' '}
        <ErrorLink onPress={onClickUpgradeHandler}>upgrade</ErrorLink> your subscription to continue
      </ErrorText>
    </ErrorContainer>
  );
};

export default Error;

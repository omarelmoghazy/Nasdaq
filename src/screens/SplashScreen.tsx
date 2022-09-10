import * as React from 'react';
import { Animated, View } from 'react-native';

import styled from 'styled-components/native';
import { SplashScreenLogo } from '../../assets/assets';
import COLORS from '../../assets/colors';

const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Logo = styled(Animated.Image).attrs({
  source: SplashScreenLogo,
})`
  height: 200px;
  width: 200px;
  resize-mode: contain;
`;

const DeveloperContainer = styled.View`
  position: absolute;
  bottom: 50px;
  left: 31%;
  justify-content: center;
  align-items: center;
`;

const Credits = styled.Text`
  color: ${COLORS.WHITE};
  font-family: 'PoppinsRegular';
  font-size: 18px;
`;

const SplashScreen = () => {
  const startValueAnimated = new Animated.Value(1);
  const startValue = 1;
  const endValue = 1.1;

  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(startValueAnimated, {
          duration: 500,
          toValue: endValue,
          useNativeDriver: true,
        }),
        Animated.timing(startValueAnimated, {
          duration: 500,
          toValue: startValue,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [startValue, endValue]);

  return (
    <View>
      <LogoContainer>
        <Logo
          style={{
            transform: [
              {
                scale: startValueAnimated,
              },
            ],
          }}
        />
      </LogoContainer>
      <DeveloperContainer>
        <Credits>By</Credits>
        <Credits>Omar Elmoghazy</Credits>
      </DeveloperContainer>
    </View>
  );
};

export default SplashScreen;

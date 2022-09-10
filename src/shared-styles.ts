import styled from 'styled-components/native';
import COLORS from '../assets/colors';

export const StockDetailsSectionContainer = styled.View`
  width: 100%;
  padding: 25px;
  background: ${COLORS.EXTRA_PALE_BLACK};
`;

export const StockDetailsSectionHeader = styled.Text`
  font-size: 22px;
  font-family: 'PoppinsRegular';
  color: ${COLORS.WHITE};
`;

export const SmallPaleWhitText = styled.Text`
  font-size: 12px;
  color: ${COLORS.PALE_WHITE};
`;

export const FlexSafeAreaView = styled.SafeAreaView`
  flex: 1;
  position: relative;
`;

import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import COLORS from '../../assets/colors';

const SearchBarContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
`;

const Bar = styled.View`
  width: 85%;
  flex-direction: row;
  background: ${COLORS.EXTRA_PALE_WHITE};
  border-radius: 5px;
  padding: 10px;
`;

const BarInput = styled.TextInput`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  font-family: 'PoppinsRegular';
  color: ${COLORS.WHITE};
`;

interface SearchBarProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = ({ value, setValue }: SearchBarProps) => {
  return (
    <SearchBarContainer>
      <Bar>
        <Feather name="search" size={20} color="white" />
        <BarInput
          placeholder="Search"
          placeholderTextColor={COLORS.WHITE}
          value={value}
          onChangeText={setValue}
        />
      </Bar>
    </SearchBarContainer>
  );
};

export default SearchBar;

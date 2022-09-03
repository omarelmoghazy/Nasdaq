import React from 'react';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

const SearchBarContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
`;

const Bar = styled.View`
  width: 85%;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 10px;
`;

const BarInput = styled.TextInput.attrs({
  placeholder: 'Search',
  placeholderTextColor: '#fff',
})`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  font-family: 'PoppinsRegular';
  color: #fff;
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
        <BarInput value={value} onChangeText={setValue} />
      </Bar>
    </SearchBarContainer>
  );
};

export default SearchBar;

import React, { Fragment } from "react";
import {
  FlatList,
  Keyboard,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import styled from "styled-components/native";
import StockCard from "../components/StockCard";

interface Stock {
  item: {
    ticker: string;
    name: string;
  };
}

const stocks = [
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
  { ticker: "AAPL", name: "Apple Inc." },
];

const ScreenContainer = styled.TouchableWithoutFeedback.attrs({
  onPress: Keyboard.dismiss,
  accessible: false,
})`
  height: 100%;
  background-color: transparent;
`;

const HeaderSafeAreaView = styled.SafeAreaView`
  background-color: rgba(0, 0, 0, 0.2);
`;

const SearchContainer = styled.View`
  justify-content: flex-end;
  align-items: center;
  padding: 20px 0;
`;

const SearchBar = styled.View`
  width: 85%;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  padding: 10px;
`;

const SearchBarInput = styled.TextInput.attrs({
  placeholder: "Search",
  placeholderTextColor: "#fff",
})`
  flex: 1;
  margin-left: 10px;
  font-size: 16px;
  font-family: "PoppinsRegular";
  color: #fff;
`;

const ContentSafeAreaView = styled.SafeAreaView`
  flex: 1;
`;

const ContentContainer = styled.FlatList.attrs((props) => ({
  data: stocks,
  renderItem: ({ item }: Stock) => {
    return <StockCard ticker={item.ticker} name={item.name} />;
  },
}))`
  padding: 0 30px;
`;

const ExploreScreen = () => {
  return (
    <ScreenContainer>
      <Fragment>
        <HeaderSafeAreaView>
          <SearchContainer>
            <SearchBar>
              <Feather name="search" size={20} color="white" />
              <SearchBarInput />
            </SearchBar>
          </SearchContainer>
        </HeaderSafeAreaView>
        <ContentSafeAreaView>
          <ContentContainer />
        </ContentSafeAreaView>
      </Fragment>
    </ScreenContainer>
  );
};

export default ExploreScreen;

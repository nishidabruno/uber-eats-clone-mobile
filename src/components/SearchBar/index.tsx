import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  SearchButton,
  SearchIcon,
  FilterIcon,
  SearchText,
  FilterButton,
  LeftSeperator,
} from './styles';

export function SearchBar() {
  const navigation = useNavigation();
  return (
    <Container>
      <SearchButton onPress={() => navigation.navigate('Search')}>
        <SearchIcon name="search" size={20} />
        <SearchText>What are you craving?</SearchText>
      </SearchButton>

      <LeftSeperator />
      <FilterButton>
        <FilterIcon name="sliders" size={20} />
      </FilterButton>
    </Container>
  );
}

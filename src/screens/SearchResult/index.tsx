import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

import { RestaurantCard } from '../../components/RestaurantCard';
import { SearchBar } from '../../components/SearchBar';
import { UserPreferences } from '../../components/UserPreferences';

import grillFukuyoshiBanner from '../../assets/grill_fukuyoshi_banner.png';

import {
  Container,
  Header,
  Content,
  SearchTerm,
  SearchDetails,
} from './styles';

export function SearchResult() {
  const theme = useTheme();
  return (
    <ScrollView style={{ backgroundColor: theme.colors.primary }}>
      <Container>
        <Header>
          <UserPreferences />
        </Header>

        <Content>
          <SearchBar />
          <SearchTerm>&quot;Deals&quot;</SearchTerm>
          <SearchDetails>3 Results for &quot;Deals&quot;</SearchDetails>

          <RestaurantCard
            imageUri={grillFukuyoshiBanner}
            rating={4.7}
            title="福よし 岡崎"
            deliveryFee={500}
            deliveryEstimatedTime="60-80"
          />
        </Content>
      </Container>
    </ScrollView>
  );
}

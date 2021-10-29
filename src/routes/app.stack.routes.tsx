import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components/native';

import { Home } from '../screens/Home';
import { Search } from '../screens/Search';
import { SearchResult } from '../screens/SearchResult';

import { HeaderBackButton } from '../components/HeaderBackButton';

export type RootStackParamsList = {
  Restaurants: undefined;
  Search: undefined;
  SearchResult: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamsList>();

export function AppStack() {
  const theme = useTheme();
  const navigation = useNavigation();

  return (
    <Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTitleStyle: {
          fontFamily: theme.fonts.primary_500,
          fontSize: 18,
        },
        headerTintColor: '#000',
        headerLeft: () => (
          <HeaderBackButton onPress={() => navigation.goBack()} />
        ),
      }}
    >
      <Screen
        name="Restaurants"
        component={Home}
        options={{ headerLeft: () => null, title: 'Restaurants' }}
      />
      <Screen
        name="Search"
        component={Search}
        options={{ title: 'What are you craving?' }}
      />
      <Screen
        name="SearchResult"
        component={SearchResult}
        options={{ title: 'Search' }}
      />
    </Navigator>
  );
}

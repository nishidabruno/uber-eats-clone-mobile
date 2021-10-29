import React from 'react';
import { StatusBar, ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

import { CategorySlider } from '../../components/CategorySlider';
import { SearchBar } from '../../components/SearchBar';
import { RestaurantCard } from '../../components/RestaurantCard';

import dominosBanner from '../../assets/dominos_banner.png';
import grillFukuyoshiBanner from '../../assets/grill_fukuyoshi_banner.png';

import { AdvertisementSlider } from '../../components/AdvertisementSlider';
import { UserPreferences } from '../../components/UserPreferences';

import dealsImg from '../../assets/deals.png';
import groceryImg from '../../assets/uber_grocery.png';
import alcohol from '../../assets/alcohol.png';
import topEatsImg from '../../assets/top_eats.png';
import burgerImg from '../../assets/burger.png';
import dessertUng from '../../assets/dessert.png';

import { Container, Header, Content } from './styles';

export function Home() {
  const theme = useTheme();

  const restaurantsData = [
    {
      imageUri: grillFukuyoshiBanner,
      title: '福よし 岡崎',
      rating: 4.7,
      deliveryFee: 0,
      deliveryEstimatedTime: '60-80',
    },
    {
      imageUri: dominosBanner,
      title: 'ドミノ • ピザ岡崎エルエルタウン店 Dominos Pizzaaaaa',
      rating: 4.6,
      deliveryFee: 0,
      deliveryEstimatedTime: '25-45',
    },
    {
      imageUri: dominosBanner,
      title: 'ドミノ • ピザ岡崎エルエルタウン店 Dominos Pizzaaaaa',
      rating: 4.6,
      deliveryFee: 0,
      deliveryEstimatedTime: '25-45',
    },
    {
      imageUri: dominosBanner,
      title: 'ドミノ • ピザ岡崎エルエルタウン店 Dominos Pizzaaaaa',
      rating: 4.6,
      deliveryFee: 0,
      deliveryEstimatedTime: '25-45',
    },
    {
      imageUri: dominosBanner,
      title: 'ドミノ • ピザ岡崎エルエルタウン店 Dominos Pizzaaaaa',
      rating: 4.6,
      deliveryFee: 0,
      deliveryEstimatedTime: '25-45',
    },
  ];

  const categoriesData = [
    {
      title: 'Deals',
      imageUri: dealsImg,
    },
    {
      title: 'Grocery',
      imageUri: groceryImg,
    },
    {
      title: 'Alcohol',
      imageUri: alcohol,
    },
    {
      title: 'Top Eats',
      imageUri: topEatsImg,
    },
    {
      title: 'Burger',
      imageUri: burgerImg,
    },
    {
      title: 'Desserts',
      imageUri: dessertUng,
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: theme.colors.primary }}>
      <Container>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />
        <Header>
          <UserPreferences />
        </Header>

        <CategorySlider data={categoriesData} />

        <Content>
          <SearchBar />
          <RestaurantCard
            imageUri={restaurantsData[1].imageUri}
            title={restaurantsData[1].title}
            rating={restaurantsData[1].rating}
            deliveryFee={restaurantsData[1].deliveryFee}
            deliveryEstimatedTime={restaurantsData[1].deliveryEstimatedTime}
          />

          <AdvertisementSlider />

          {restaurantsData.map((restaurantCardInfo, index) => (
            <RestaurantCard
              key={String(index)}
              imageUri={restaurantCardInfo.imageUri}
              title={restaurantCardInfo.title}
              rating={restaurantCardInfo.rating}
              deliveryFee={restaurantCardInfo.deliveryFee}
              deliveryEstimatedTime={restaurantCardInfo.deliveryEstimatedTime}
            />
          ))}
        </Content>
      </Container>
    </ScrollView>
  );
}

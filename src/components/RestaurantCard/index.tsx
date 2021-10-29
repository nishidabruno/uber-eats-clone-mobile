import React from 'react';
import { ImageSourcePropType } from 'react-native';

import {
  Container,
  Banner,
  RestaurantDetailsContainer,
  Title,
  RatingContainer,
  DeliveryDetails,
  OrderDetailsContainer,
  DeliveryFee,
  DeliveryEstimatedTime,
  Rating,
} from './styles';

interface RestaturantCard {
  imageUri: ImageSourcePropType;
  title: string;
  rating: number;
  deliveryFee: number;
  deliveryEstimatedTime: string;
}

export function RestaurantCard({
  imageUri,
  title,
  rating,
  deliveryFee,
  deliveryEstimatedTime,
}: RestaturantCard) {
  return (
    <Container>
      <Banner source={imageUri} resizeMode="contain" />
      <RestaurantDetailsContainer>
        <Title numberOfLines={1}>{title}</Title>
        <RatingContainer>
          <Rating>{rating}</Rating>
        </RatingContainer>
      </RestaurantDetailsContainer>
      <DeliveryDetails>
        <OrderDetailsContainer>
          <DeliveryFee>¥ {deliveryFee} Delivery Fee </DeliveryFee>
          <DeliveryEstimatedTime>
            • {deliveryEstimatedTime} min
          </DeliveryEstimatedTime>
        </OrderDetailsContainer>
      </DeliveryDetails>
    </Container>
  );
}

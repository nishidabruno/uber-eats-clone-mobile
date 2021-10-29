import React from 'react';

import adBanner from '../../assets/ad_banner.png';

import { Container, Banner } from './styles';

export function AdvertisementSlider() {
  return (
    <Container>
      <Banner source={adBanner} resizeMode="contain" />
    </Container>
  );
}

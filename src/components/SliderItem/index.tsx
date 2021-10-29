import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Icon, Title } from './styles';

interface SliderItemProps {
  title: string;
  image: ImageSourcePropType;
}

export function SliderItem({ image, title }: SliderItemProps) {
  const navigation = useNavigation();

  return (
    <Container onPress={() => navigation.navigate('Search')}>
      <Icon source={image} resizeMode="contain" />
      <Title>{title}</Title>
    </Container>
  );
}

import React from 'react';

import { Container, Title, DarkenImage } from './styles';

import burgerImg from '../../assets/categories/burger.jpg';

export function CategoryCard() {
  return (
    <Container source={burgerImg}>
      <DarkenImage>
        <Title>Burgers</Title>
      </DarkenImage>
    </Container>
  );
}

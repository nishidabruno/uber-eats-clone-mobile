import React from 'react';
import { CategoryCard } from '../../components/CategoryCard';
import { SearchInput } from '../../components/SearchInput';

import { Container, Header, CategoriesContainer, Title, Cards } from './styles';

export function Search() {
  return (
    <Container>
      <Header>
        <SearchInput />

        <CategoriesContainer>
          <Title>Top categories</Title>
          <Cards>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </Cards>
        </CategoriesContainer>
      </Header>
    </Container>
  );
}

import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Input } from './styles';

export function SearchInput() {
  return (
    <Container>
      <Feather name="search" size={21} />
      <Input />
    </Container>
  );
}

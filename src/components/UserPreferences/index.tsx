import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  AddressInfoMenu,
  AddressContainer,
  AddressIconContainer,
  DeliverTime,
  Address,
  UsageMethodMenu,
  UsageTypeTitle,
} from './styles';

export function UserPreferences() {
  return (
    <Container>
      <AddressInfoMenu>
        <AddressContainer>
          <DeliverTime>Deliver now</DeliverTime>
          <Address>Hane Kitamachi 3-{'\n'}chome-1-19</Address>
        </AddressContainer>
        <AddressIconContainer>
          <Feather name="chevron-down" size={22} />
        </AddressIconContainer>
      </AddressInfoMenu>

      <UsageMethodMenu>
        <UsageTypeTitle>Delivery</UsageTypeTitle>
        <Feather name="chevron-down" size={26} />
      </UsageMethodMenu>
    </Container>
  );
}

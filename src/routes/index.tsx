import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './app.stack.routes';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}

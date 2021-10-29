import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import Svg, { Line, Polyline } from 'react-native-svg';

interface HeaderBackButton {
  onPress: () => void;
}

export function HeaderBackButton({ onPress }: HeaderBackButton) {
  return (
    <BorderlessButton onPress={onPress}>
      <Svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <Line x1="19" y1="12" x2="5" y2="12" />
        <Polyline points="12 19 5 12 12 5" />
      </Svg>
    </BorderlessButton>
  );
}

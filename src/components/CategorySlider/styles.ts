import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  margin-top: 24px;
`;

export const CategoryContainer = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;

  margin-right: 22px;
`;

export const Icon = styled.Image`
  width: 60px;
  height: 60px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;
`;

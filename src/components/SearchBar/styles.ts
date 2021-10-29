import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 48px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 32px;
  margin-bottom: 16px;
  padding: 0 18px;

  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.shape_primary};
`;

export const SearchButton = styled(BorderlessButton)`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const SearchIcon = styled(Feather)`
  padding: 8px;
  padding-right: 14px;
`;

export const FilterIcon = styled(Feather)`
  padding: 8px;
  padding-left: 14px;
`;

export const SearchText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.text_light};
`;

export const FilterButton = styled(BorderlessButton)``;

export const LeftSeperator = styled.View`
  width: 1px;
  height: 36px;
  background-color: ${({ theme }) => theme.colors.shape_dark};
`;

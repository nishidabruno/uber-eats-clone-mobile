import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 0 16px;
  flex: 1;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View``;

export const Content = styled.View``;

export const SearchTerm = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_600};
  font-size: 36px;

  margin-top: 16px;
`;
export const SearchDetails = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 14px;

  margin-top: 20px;
  margin-bottom: 28px;
`;

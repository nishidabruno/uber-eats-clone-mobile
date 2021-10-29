import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  margin-top: 28px;
`;

export const CategoriesContainer = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  margin-top: 24px;
  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;
`;

export const Cards = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

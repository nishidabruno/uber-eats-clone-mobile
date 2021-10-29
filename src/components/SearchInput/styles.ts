import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;

  padding: 17px 18px;

  background-color: ${({ theme }) => theme.colors.shape_secondary};

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.shape_dark};
`;

export const Input = styled.TextInput`
  width: 100%;

  margin-left: 16px;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;
`;

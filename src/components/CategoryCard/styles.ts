import styled from 'styled-components/native';

export const Container = styled.ImageBackground`
  width: 47.5%;
  height: 72px;

  margin-bottom: 20px;
  background-color: rgba(0, 0, 0, 1);
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;
`;

export const DarkenImage = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);
`;

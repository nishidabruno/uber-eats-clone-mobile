import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  margin-bottom: 26px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 150px;
`;

export const RestaurantDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

export const Title = styled.Text`
  width: 90%;

  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;
`;

export const RatingContainer = styled.View`
  padding: 7px;
  align-self: flex-start;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.shape_primary};
`;

export const Rating = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 12px;
`;

export const DeliveryDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-top: 4px;
`;

export const OrderDetailsContainer = styled.View`
  flex-direction: row;
`;

export const DeliveryFee = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 14px;
`;

export const DeliveryEstimatedTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.text_light};
`;

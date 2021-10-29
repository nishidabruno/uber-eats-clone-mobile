import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 26px;
`;

export const AddressInfoMenu = styled(BorderlessButton)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeliverTime = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_300};
  font-size: 14px;
`;

export const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_500};
  font-size: 16px;
  letter-spacing: 1px;

  margin-top: 4px;
`;
export const AddressContainer = styled.View``;

export const AddressIconContainer = styled.View`
  margin-top: 28px;
`;

export const UsageMethodMenu = styled(BorderlessButton)`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 20px;
  padding: 8px 14px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.shape_primary};
`;

export const UsageTypeTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary_400};
  font-size: 16px;

  margin-right: 6px;
`;

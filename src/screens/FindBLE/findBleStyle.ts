import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
  padding: 0 24px;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const Text = styled.Text`
  color: ${({theme}) => theme.color.neutral300};
`;

export const ItemWrapper = styled.ScrollView`
  margin: 10px 0;
  gap: 5px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-size: 20px;
`;

export const WriteButton = styled.TouchableOpacity`
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.black};
  border-radius: 10px;
`;

export const ItemBox = styled.TouchableOpacity`
  border: 1px solid ${({theme}) => theme.color.neutral100};
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  gap: 5px;
`;

export const ItemText = styled.Text<{color?: string}>`
  color: ${({theme, color}) => color || theme.color.black};
  font-size: 13px;
`;

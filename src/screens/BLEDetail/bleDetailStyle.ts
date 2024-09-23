import styled from '@emotion/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.color.white};
  padding: 0 24px;
`;

export const InfoWrapper = styled.View`
  margin-top: 24px;
`;

export const TextWrapper = styled.View`
  flex-direction: row;
  gap: 10px;
  border-bottom-width: 1px;
  padding: 10px 0;
`;

export const Title = styled.Text`
  flex: 0.25;
`;

export const Content = styled.Text`
  flex: 0.75;
`;

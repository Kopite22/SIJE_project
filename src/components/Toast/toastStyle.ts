import styled from '@emotion/native';

export const ToastContainer = styled.View`
  padding: 20px;
  position: absolute;
  bottom: 120px;
  z-index: 10;
  right: 24px;
  background-color: ${({theme}) => theme.color.black};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ToastText = styled.Text`
  color: ${({theme}) => theme.color.white};
  font-size: 12px;
`;

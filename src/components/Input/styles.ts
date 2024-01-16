import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.quicksand};
`;

export const Input = styled.TextInput`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.montserratBold};
  vertical-align: top;
  margin-top: 12px;
  border-width: 1px;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;
`;
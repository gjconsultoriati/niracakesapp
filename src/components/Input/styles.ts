import { TextInputProps } from 'react-native';
import styled, { css } from "styled-components/native";

type TextInputPropsStyle = TextInputProps & {
  isFocused: boolean
}
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

export const Input = styled.TextInput<TextInputPropsStyle>`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fontFamily.montserratBold};
  vertical-align: top;
  margin-top: 12px;
  border-width: 1px;
  padding: 16px;
  border-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 8px;

  ${({ isFocused, theme}) => isFocused && (
    css`
      border-width: 1px;
      border-color: ${theme.colors.error}
    `
  )}
`;
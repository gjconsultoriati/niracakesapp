import styled, { css } from "styled-components/native";


export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 40px;

  ${({ disabled }) => disabled && (
    css`
      opacity: 0.4;
    `
  )}
`
export const Title = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fontFamily.montserratBold};
`
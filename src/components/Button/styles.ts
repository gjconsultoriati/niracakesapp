import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 16px;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 40px;
`
export const Title = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.colors.primary};
  font-family: ${({theme}) => theme.fontFamily.montserratBold};
`
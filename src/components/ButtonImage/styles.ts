import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  margin-top: 16px;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({theme}) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
`
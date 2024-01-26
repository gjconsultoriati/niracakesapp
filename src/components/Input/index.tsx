import { TextInputProps } from 'react-native';
import { Container, Input as InputText, Label } from "./styles";

type InputProps = TextInputProps & {
  label: string
  isFocused?: boolean 
}
export function Input({ label,isFocused = false,...rest }: InputProps) {
  return (
    <Container>
      
      <Label>{label}</Label>
      <InputText
        isFocused={isFocused}
        
        {...rest}
      />
    </Container>
  )
}
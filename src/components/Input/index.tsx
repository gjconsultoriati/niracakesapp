import { TextInputProps } from 'react-native';
import { Container, Input as InputText, Label } from "./styles";
type InputProps = TextInputProps  & {
  label: string
}
export function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <Label>{label}</Label>
      <InputText
        {...rest}
      />
    </Container>
  )
}
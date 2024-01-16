import { Spinner } from "@gluestack-ui/themed";
import { TouchableOpacityProps } from "react-native";
import { useTheme } from 'styled-components/native';
import { Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading: boolean
}
export function Button({ title, loading, ...rest}: ButtonProps) {
  const { colors } = useTheme()

  return (
    <Container
    {...rest}
    >
      {
        loading ?
          <Spinner
            size={'small'}
            color={colors.primary}
          />
          : 
          <Title>{title}</Title>
      }
    </Container>
  )
}
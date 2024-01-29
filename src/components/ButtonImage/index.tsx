import { Entypo } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components/native';
import { Container } from "./styles";


export function ButtonImage({...rest}: TouchableOpacityProps) {
  const { colors } = useTheme()
  return (
    <Container
      activeOpacity={0.4}
      {...rest}
    >
      <Entypo 
        name="camera"
        color={colors.secondary}
        size={22}
      />
    </Container>
  )
}
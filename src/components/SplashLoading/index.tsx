import { Spinner, VStack } from '@gluestack-ui/themed';
import { useTheme } from 'styled-components/native';
import LogoSVG from '../../assets/Logo.svg';


export function SplashLoading() {
  const { colors, } = useTheme()
  return (
    <VStack
      flex={1}
      justifyContent='center'
      alignItems='center'
      backgroundColor={colors.primary}
    >
      <LogoSVG
        width={200}
        height={200}
      />
      <Spinner 
        size={'large'}
        color={colors.secondary}
      />
    </VStack>
  )
}
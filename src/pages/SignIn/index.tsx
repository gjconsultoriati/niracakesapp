import { Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import Toast from 'react-native-toast-message';
import { useTheme } from 'styled-components/native';
import LogoSVG from '../../assets/Logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
  const { colors, fontFamily } = useTheme()
  const [loadingAuth, setLoadingAuth] = useState(false)

 function SignIn() {
    
    try {
      setLoadingAuth(true)
      
    } catch (error) {
      console.log({error})
      Toast.show({
        type: 'error',
        text1: 'Erro ao Logar-se!😓',
        text2: 'Tente novamente mais tarde',
        topOffset: 60,
        visibilityTime: 5000
      })
    }finally {
      setLoadingAuth(false)
    }
  }
  return (
    <VStack
      flex={1}
      backgroundColor={colors.primary}
    >
      <VStack
        flex={1}
        justifyContent="center"
        alignItems="center"
      >
        <LogoSVG
          width={200}
          height={200}
        />
        <Text
          fontSize={18}
          fontFamily={fontFamily.montserratBold}
          color={colors.secondary}
        >
          Faça Login para postar seus bolos 🍰
        </Text>

      </VStack>
      <VStack
        flex={1}
        marginHorizontal={15}
      >
        <Input
          label="E-mail"
          value="admin@niracakes.com.br"
          editable={false}
          style={{
            opacity: 0.3
          }}
        />
        <Input
          label="Senha"
          maxLength={8}
        />
        <Button
          title="Entrar"
          onPress={SignIn}
          loading={loadingAuth}
        />
      </VStack>
    </VStack>
  )
}
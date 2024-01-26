import { Text, VStack } from "@gluestack-ui/themed";
import { SafeAreaView } from 'react-native';
import { useTheme } from "styled-components/native";
import LogoSVG from '../../assets/Logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Home() {
  const { colors, fontFamily } = useTheme()
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <VStack
        flex={1}
        backgroundColor={colors.primary}
      >
        <VStack
          alignItems="center"
        >
          <LogoSVG
            width={200}
            height={200}
          />
          <Text
            color={colors.secondary}
            fontSize={16}
            fontFamily={fontFamily.montserratBold}
          >
            Cadastre seu bolo
          </Text>
        </VStack>
        <VStack
          marginHorizontal={15}
        >
          <Input
            label="Nome"
          />
          <Input
            label="Descrição"
          />
          <Input
            label="Imagem"
          />
          <Button
            title="Enviar"
            onPress={() => {}}
            loading={false}
            disabled={true}
          />

        </VStack>
      </VStack>
    </SafeAreaView>
  )
}
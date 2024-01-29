import { Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { FlatList, SafeAreaView } from 'react-native';
import { useTheme } from "styled-components/native";
import LogoSVG from '../../assets/Logo.svg';
import { CardCakes } from "../../components/CardCakes";
type CakesProps = {
  id: string;
  name: string;
  description: string;
}
export function History() {
  const { colors, fontFamily } = useTheme()
  const [cakes, setCakes] = useState<CakesProps[]>([
    {
      id: String(Math.random() * 1000), name: 'Bolo de chocolate', description: 'Bolo de chocolate com cobertura de nutella'
    },
    {
      id: String(Math.random() * 1000), name: 'Bolo de chocolate', description: 'Bolo de chocolate com cobertura de nutella'
    },
    {
      id: String(Math.random() * 1000), name: 'Bolo de chocolate', description: 'Bolo de chocolate com cobertura de nutella'
    },
    {
      id: String(Math.random() * 1000), name: 'Bolo de chocolate', description: 'Bolo de chocolate com cobertura de nutella'
    },
  ])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack
        flex={1}
        backgroundColor={colors.primary}
      >
        <VStack
          alignItems="center"
          marginBottom={30}
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
            History
          </Text>
        </VStack>
        <VStack
          flex={1}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={cakes}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <CardCakes
                data={item}
              />
            )}
          />

        </VStack>
      </VStack>
    </SafeAreaView>
  )
}
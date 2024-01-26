import { Text, VStack } from "@gluestack-ui/themed";
import { SafeAreaView } from 'react-native';
import { useTheme } from "styled-components/native";
import LogoSVG from '../../assets/Logo.svg';

export function History() {
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
            History
          </Text>
        </VStack>
        {/* inputs... */}
      </VStack>
    </SafeAreaView>
  )
}
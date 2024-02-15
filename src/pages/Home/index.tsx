import { ScrollView, Text, VStack, View } from "@gluestack-ui/themed";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { useTheme } from "styled-components/native";
import LogoSVG from '../../assets/Logo.svg';
import { Button } from "../../components/Button";
import { ButtonImage } from "../../components/ButtonImage";
import { Input } from "../../components/Input";
import { useHome } from "./useHome";

export function Home() {
  const { colors, fontFamily } = useTheme()
  const { handleCamera, images, handleRemovePhoto } = useHome()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>

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
            paddingBottom={140}
            flex={1}
          >
            <Input
              label="Nome"
            />
            <Input
              label="Descrição"
            />
            {images.length > 0 ?  (
              <View
                flex={1}
                alignItems="center"
                justifyContent="center"
              >
                <View
                  width={200}
                  height={200}
                >
                  <Image
                    source={{ uri: images[0]?.uri }}
                    alt={images[0]?.filename}
                    width={200}
                    height={200}
                  />
                  <TouchableOpacity 
                    style={styles.button}
                    onPress={handleRemovePhoto}
                  >
                    <Text
                      style={styles.buttonText}
                    >
                      Excluir
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ): <></>

            }
            <ButtonImage
              onPress={handleCamera}
            />
            <Button
              title="Enviar"
              onPress={() => { }}
              loading={false}
              disabled={true}
            />

          </VStack>
        </VStack>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    alignItems: 'center',
    height: 30,
    justifyContent: 'center',
    top: 'auto',
    bottom: 0
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  }
})
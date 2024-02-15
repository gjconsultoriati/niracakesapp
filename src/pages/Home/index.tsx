import { ScrollView, Text, VStack, View } from "@gluestack-ui/themed";
import { Controller } from "react-hook-form";
import { Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useTheme } from "styled-components/native";
import LogoSVG from '../../assets/Logo.svg';
import { Button } from "../../components/Button";
import { ButtonImage } from "../../components/ButtonImage";
import { Input } from "../../components/Input";
import { useHome } from "./useHome";

export function Home() {
  const { colors, fontFamily } = useTheme()
  const {
    handleCamera,
    images,
    handleRemovePhoto,
    control,
    hasErrorInput,
    isFocused,
    isSubmitting,
    errors,
    handleSubmit,
    sendCakePost,
    isLoading
  } = useHome()
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >

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
              gap={10}
            >
              <Controller
                control={control}
                name="name"
                render={({ field: { onBlur, onChange, value, } }) => (
                  <Input
                    label="Nome"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    isFocused={isFocused}
                    placeholder="Digite o nome do bolo"
                    placeholderTextColor={colors.secondary}
                    onFocus={hasErrorInput}
                  />
                )}
              />

              {
                errors.name && (
                  <Text
                    color={colors.secondary}
                    fontFamily={fontFamily.quicksand}
                  >
                    {errors.name.message}
                  </Text>
                )
              }
              <Controller
                control={control}
                name="description"
                render={({ field: { onBlur, onChange, value, } }) => (
                  <Input
                    label="Descrição"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    isFocused={isFocused}
                    value={value}
                    placeholder="Digite uma descrição para o bolo"
                    placeholderTextColor={colors.secondary}
                    onFocus={hasErrorInput}
                  />
                )}
              />
              {
                errors.description && (
                  <Text
                    color={colors.secondary}
                    fontFamily={fontFamily.quicksand}
                  >
                    {errors.description.message}
                  </Text>
                )
              }
               
              {images.length > 0 ? (
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
              ) : <></>}


              <ButtonImage
                onPress={handleCamera}
              />

              <Button
                title="Enviar"
                onPress={handleSubmit(sendCakePost)} 
                loading={isLoading}
                disabled={isSubmitting && !errors}
              />

            </VStack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAwareScrollView>
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
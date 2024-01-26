import { Text, VStack } from "@gluestack-ui/themed";
import { Controller } from "react-hook-form";
import LogoSVG from '../../assets/Logo.svg';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useSignIn } from "./hooks/useSignIn";


export function SignIn() {
  const {
    loadingAuth,
    colors,
    fontFamily,
    control,
    errors,
    isSubmitting,
    SignIn,
    handleSubmit,
    isFocused,
    hasErrorInput,
    hasValueInput
  } = useSignIn()


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
        <Controller
          control={control}
          name="password"
          render={({ field: { onBlur, onChange, value, } }) => (
            <Input
              label="Senha"
              isFocused={isFocused}
              maxLength={8}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Digite sua senha"
              onFocus={hasErrorInput}
              placeholderTextColor={colors.secondary}
              secureTextEntry
            />

          )}
        />

        {
          errors.password && (
            <Text
              color={colors.secondary}
              fontFamily={fontFamily.quicksand}
            >
              {errors.password.message}
            </Text>
          )
        }

        <Button
          title="Entrar"
          onPress={handleSubmit(SignIn)}
          loading={loadingAuth}
          disabled={isSubmitting || hasValueInput}
        />
      </VStack>
    </VStack>
  )
}
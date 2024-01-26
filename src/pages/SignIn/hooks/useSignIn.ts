import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { SignInFormData, SignInFormSchema } from "../../../utils/validations/SignInValidation/SignInValidation";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from 'styled-components/native';


export function useSignIn() {
  const [loadingAuth, setLoadingAuth] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const { colors, fontFamily } = useTheme()
  const { navigate } = useNavigation()
  const {
    control,
    handleSubmit,
    watch,
    formState: {
      errors,
      isSubmitting,
    }
  } = useForm<SignInFormData>({
    resolver: zodResolver(SignInFormSchema),
  })

  const hasValueInput = !watch('password')

  function hasErrorInput() {
    if(errors.password?.message){
      setIsFocused(true)
    } else{ 
      setIsFocused(false)
    }
  }
  
  function SignIn(data: SignInFormData) {
    navigate('Home')
    // try {
    //   setLoadingAuth(false)

    // } catch (error) {
    //   console.log({ error })
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Erro ao Logar-se!😓',f
    //     text2: 'Tente novamente mais tarde',
    //     topOffset: 60,
    //     visibilityTime: 5000
    //   })
    // } finally {
    //   setLoadingAuth(false)
    // }
  }

  return {
    loadingAuth,
    colors, 
    fontFamily,
    control,
    errors,
    SignIn,
    handleSubmit,
    isSubmitting,
    isFocused,
    hasErrorInput,
    hasValueInput
  }
  }
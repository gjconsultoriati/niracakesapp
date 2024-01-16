import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { NavigationContainer, } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components/native';
import { SplashLoading } from './src/components/SplashLoading';
import { AppRoutes } from './src/routes/app.routes';
import { AuthRoutes } from './src/routes/auth.routes';
import theme from './src/theme';
export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold
  })
  const user = false

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <SplashLoading />
      </ThemeProvider>
    )
  }

  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        {
          user ? <AppRoutes /> : <AuthRoutes />
        }
        <Toast />
      </ThemeProvider>
    </NavigationContainer>
  );
}


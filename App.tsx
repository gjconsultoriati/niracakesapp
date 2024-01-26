import { Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { Quicksand_400Regular } from '@expo-google-fonts/quicksand';
import { useFonts } from 'expo-font';
import Toast from 'react-native-toast-message';
import { ThemeProvider } from 'styled-components/native';
import { SplashLoading } from './src/components/SplashLoading';
import { Routes } from './src/routes';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Quicksand_400Regular,
    Montserrat_400Regular,
    Montserrat_700Bold
  })


  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <SplashLoading />
      </ThemeProvider>
    )
  }

  return (
      <ThemeProvider theme={theme}>
        <Routes />
        <Toast />
      </ThemeProvider>
  );
}


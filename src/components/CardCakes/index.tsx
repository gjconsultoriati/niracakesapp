import { Box, HStack, Image, Text } from "@gluestack-ui/themed";
import { useTheme } from "styled-components/native";

type CardCakesProps = {
  data: {
    id: string;
    name: string;
    description: string;
  }
}
export function CardCakes({ data: { name, description } }: CardCakesProps) {
  const { colors, fontFamily } = useTheme()
  const cakeFake = 'https://th.bing.com/th/id/R.7abc9f21f48f26a1a1dad1070b9030d8?rik=dJgl5XPp73rNKA&riu=http%3a%2f%2freciperhapsody.files.wordpress.com%2f2010%2f11%2fmocha-crunch-cake-11-14-10.jpg&ehk=KH8PgXHONggWqm%2bM6KEYx2QOFqKjcvj3VOXcvfu6Kis%3d&risl=&pid=ImgRaw&r=0'

  return (
    <Box
      backgroundColor={colors.white}
      height={120}
      marginHorizontal={15}
      borderRadius={8}
      flexDirection="row"
      marginBottom={10}
    >
      <HStack>
        <Image
          source={{ uri: cakeFake }}
          alt="Foto do bolo"
          role="banner"
          width={90}
          height={90}
          borderRadius={8}
        />
      </HStack>
      <HStack
        maxWidth={230}
        justifyContent="center"
        alignItems="center"
      >

        <Text
          color={colors.primary}
          fontFamily={fontFamily.montserratBold}
        >
          {name}
        </Text>
        <Text
          color={colors.primary}
          fontFamily={fontFamily.quicksand}
          maxFontSizeMultiplier={1}
          maxWidth={250}
        >
          {description}
        </Text>
      </HStack>
    </Box>

  )
}
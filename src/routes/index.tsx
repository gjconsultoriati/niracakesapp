import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";



export function Routes() {

  const user = true

  return (
    <NavigationContainer>
      {
        user ? <AppRoutes /> : <AuthRoutes />
      }
    </NavigationContainer >
  )

}
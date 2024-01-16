import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../pages/Home';
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator>
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign
                name="home"
                color={color}
                size={size}
              />
            )
          },
          headerShown: false,
        }}
      />
      {/* <Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <AntDesign
                name="shoppingcart"
                color={color}
                size={size}
              />
            )
          },
          headerShown: false,
        }}
      /> */}
    </Navigator>
  )

}
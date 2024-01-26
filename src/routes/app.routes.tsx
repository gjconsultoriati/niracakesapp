import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { History } from '../pages/History';
import { Home } from '../pages/Home';
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle:{
          backgroundColor: '#FFFFFF'
        }
      }}
    >
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
          tabBarActiveTintColor: '#D67888',
         
        }}
        
      />
      <Screen
        name='Historico'
        component={History}
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
          tabBarActiveTintColor: '#D67888',
        }}
      />
    </Navigator>
  )

}

import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import PlanetDetails from './src/screens/PlanetDetails';
import { Cores } from './src/Colors';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Planetas' screenOptions={{
        headerStyle: {backgroundColor: Cores.preto_medio},  // cor do background
        headerTitleAlign: "center", // alinha o titulo no centro
        headerTitleStyle: {color: "white", fontWeight: "900", fontSize: 20,} // muda a cor do titulo
      }}>
        <Stack.Screen name='Planetas' component={Home}/>
        <Stack.Screen name='Detalhes do Planeta' component={PlanetDetails}/>
      </Stack.Navigator>
      <View style={{height: 40, alignItems: "center", backgroundColor: Cores.preto_medio}}>
        <Text style={{color: Cores.branco, marginTop: 3,}}>Desenvolvido por @luy_choyan</Text>
      </View>
    </NavigationContainer>
  );
}


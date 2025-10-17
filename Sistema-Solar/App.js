
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import PlanetDetails from './src/screens/detales/PlanetDetails';
import { Cores } from './src/Colors';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sistema Solar' screenOptions={{
        headerStyle: {backgroundColor: Cores.preto_medio},  // cor do background
        headerTitleAlign: "center", // alinha o titulo no centro
        headerTitleStyle: {color: "white", fontWeight: "900", fontSize: 24,} // muda a cor do titulo
      }}>
        <Stack.Screen name='Sistema Solar' component={Home}/>
        <Stack.Screen name='Detalhes do Planeta' component={PlanetDetails} />
      </Stack.Navigator>
      <View style={{height: 40, alignItems: "center", backgroundColor: Cores.preto_medio}}>
        <Text style={{color: Cores.branco, marginTop: 3,}}>Desenvolvido por @luy_choyan</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

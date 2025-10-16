
import { StyleSheet, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home/home';
import Detalhes from './src/screens/Detales/detalhes';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: "white"}, headerTitleAlign: "center"}}>
        <Stack.Screen name='Sistema Solar' component={Home}/>
        <Stack.Screen name='Detalhes do Planeta' component={Detalhes} />
      </Stack.Navigator>
      <View>
        <Text>App criado por Luy</Text>
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

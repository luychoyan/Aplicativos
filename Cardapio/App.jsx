import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import ItemDetailScreen from './src/screens/ItemDetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Cria o Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // Deve envolver todo o app. o Navigator controla a navegacao entre telas, e o screen sao cada uma das diferentes telas.
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='HomeScreen'> 
        <Stack.Screen  name='HomeScreen' component={HomeScreen} options={{title: "Cardapio"}}/>
        <Stack.Screen name='ItemDetail' component={ItemDetailScreen} options={{title: "Detalhes do Item"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

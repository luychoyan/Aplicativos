import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import cores from "./src/components/constants/Cores"
import { SafeAreaView } from 'react-native-safe-area-context';
import Informacoes_Clima from './src/components/Informacoes_Clima';
import estilos from './Estilos';
import { TextInput } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={estilos.conteiner}>
        <StatusBar style="inverted" />
        <View style={estilos.conteinerTituloInput}>
          <Text style={estilos.textoTitulo}>Clima</Text>
          <View style={estilos.conteinerInputBotao}>
            <TextInput style={estilos.input} />
            <TouchableOpacity style={estilos.botao}>
              <Text style={estilos.textoBotao}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Informacoes_Clima />
        <Text>App criado por @luy_choyan</Text>
    </SafeAreaView>
  );
}



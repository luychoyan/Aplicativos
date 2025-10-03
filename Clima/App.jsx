import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Informacoes_Clima from './src/components/Informacoes_Clima';
import estilos from './Estilos';
import { useState } from 'react';


export default function App() {
  const [visivel, setVisivel] = useState(true)

  return (
    <SafeAreaView style={estilos.conteiner}>
        <StatusBar style="inverted" />
        <View style={estilos.conteinerTituloInput}>
          <Text style={estilos.textoTitulo}>Clima</Text>
          <View style={estilos.conteinerInputBotao}>
            <TextInput style={estilos.input} />
            <TouchableOpacity style={estilos.botao}>
              <Image style={estilos.icone} source={require("./src/assets/icons/lupa.png")} />
              <Text style={estilos.textoBotao}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {visivel? (<Informacoes_Clima  />) : <View></View> }
        <Text>App criado por @luy_choyan</Text>
    </SafeAreaView>
  );
}



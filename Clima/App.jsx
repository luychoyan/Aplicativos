import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Informacoes_Clima from './src/components/Informacoes_Clima';
import estilos from './Estilos';
import { useState } from 'react';
import axios from 'axios';



export default function App() {
  const chaveAPI = "2734e96df356ca615e108bec4ae8a1a5"
  const [visivel, setVisivel] = useState(false)
  const [cidadeBuscada, setCidadeBuscada] = useState('')
  const [dadosAPI, setDadosAPI] =  useState()

  const url_API = `https://api.openweathermap.org/data/2.5/weather?q=${cidadeBuscada}&appid=${chaveAPI}&lang=pt_br&units=metric`

  async function buscarCidade() {
    const respostaAPI = await axios.get(url_API)
    setDadosAPI(respostaAPI.data)
    console.log(respostaAPI.data)
    setVisivel(true)
    setCidadeBuscada('')
  }


  return (
    <SafeAreaView style={estilos.conteiner}>
        <StatusBar style="inverted" />
        <View style={estilos.conteinerTituloInput}>
          <Text style={estilos.textoTitulo}>Clima</Text>
          <View style={estilos.conteinerInputBotao}>
            <TextInput onChangeText={setCidadeBuscada} value={cidadeBuscada} placeholder='Digite sua cidade...' style={estilos.input} />
            <TouchableOpacity onPress={buscarCidade} style={estilos.botao}>
              <Image style={estilos.icone} source={require("./src/assets/icons/lupa.png")} />
              <Text style={estilos.textoBotao}>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {visivel? <Informacoes_Clima dadosAPI={dadosAPI} /> : <View></View> }
        <Text>App criado por @luy_choyan</Text>
    </SafeAreaView>
  );
}



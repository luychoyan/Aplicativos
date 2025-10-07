

import { View, Text, Image } from "react-native";
import estilos from "./Estilos"
import cores from "../../src/constants/Cores"
import Imagem_Clima from "./Imagem_Clima";


function Informacoes_Clima({dadosAPI}) { 
  return (
    <View style={estilos.conteinerInformacao}>
      <View style={estilos.caixaTextoCidade}>
        <Text style={estilos.textoCidade}>{dadosAPI.name}</Text>
        <Text style={{fontSize: 20, fontWeight: "600", color: cores.branco}}>{dadosAPI.sys.country}</Text>
      </View>
      <View style={estilos.caixaGrausImagem}>
        <View style={estilos.caixaTemperaturaInfo}>
          <Text style={estilos.textoGraus}>{dadosAPI.main.temp.toFixed()}°C</Text>
          <Text style={estilos.textoSensacao}>Sensação Térmica: {dadosAPI.main.feels_like.toFixed()} °C</Text>
          <Text style={estilos.textoDescricao}>{dadosAPI.weather[0].description.toUpperCase()}</Text>
        </View>
        <Imagem_Clima dadosAPI={dadosAPI} />
      </View>
      <View style={estilos.caixaOutrasInfo}>
        <View style={estilos.caixaDetalhes}>
          <Text style={estilos.textoDetalhes}>Detalhes do Clima</Text>
        </View>
        <View style={estilos.caixaOutrasInfo}>
          <View style={estilos.caixaInfo}>
            <Image style={estilos.icones} source={require("../assets/icons/vento.png")} />
            <Text style={estilos.textoVento}>Velocidade do Vento: {dadosAPI.wind.speed} Km/h</Text>
          </View>
          <View style={estilos.caixaInfo}>
            <Image style={estilos.icones} source={require("../assets/icons/umidade.png")} />
            <Text style={estilos.textoVento}>Umidade: {dadosAPI.main.humidity}%</Text>
          </View>
          <View style={estilos.caixaInfo}>
            <Image style={estilos.icones} source={require("../assets/icons/pressao.png")} />
            <Text style={estilos.textoVento}>Pressão: {dadosAPI.main.pressure} hPa</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Informacoes_Clima
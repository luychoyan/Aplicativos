

import { View, Text, Image } from "react-native";
import estilos from "./Estilos"
import cores from "../components/constants/Cores"
import { EventSubscriptionVendor } from "react-native/Libraries/vendor/emitter/EventEmitter";




function Informacoes_Clima() {
  return (
    <View style={estilos.conteinerInformacao}>
      <View style={estilos.caixaTextoCidade}>
        <Text style={estilos.textoCidade}>Forquilha</Text>
        <Text style={{fontSize: 16, fontWeight: "600", color: cores.branco}}>Brasil</Text>
      </View>
      <View style={estilos.caixaGrausImagem}>
        <View style={estilos.caixaTemperaturaInfo}>
          <Text style={estilos.textoGraus}>28°C</Text>
          <Text style={estilos.textoSensacao}>Sensação Térmica: 27 °C</Text>
          <Text style={estilos.textoDescricao}>Chuva Forte</Text>
        </View>
        <View style={estilos.caixaImagem}>
          <Image 
          style={estilos.imagem}
          source={require('../assets/icons/chuva-forte.png')} />
        </View>
      </View>
      <View style={estilos.caixaOutrasInfo}>
        <View style={estilos.caixaDetalhes}>
          <Text style={estilos.textoDetalhes}>Detalhes do Clima</Text>
        </View>
        <View style={estilos.caixaOutrasInfo}>
          <View style={estilos.caixaInfo}>
            <Image style={estilos.icones} source={require("../assets/icons/vento.png")} />
            <Text style={estilos.textoVento}>Velocidade do Vento: 14 Km/h</Text>
          </View>
          <View style={estilos.caixaInfo}>
            <Image style={estilos.icones} source={require("../assets/icons/umidade.png")} />
            <Text style={estilos.textoVento}>Umidade: 87%</Text>
          </View>
          <View style={estilos.caixaInfo}>
            <Image style={estilos.icones} source={require("../assets/icons/pressao.png")} />
            <Text style={estilos.textoVento}>Pressão: 1012 hPa</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
export default Informacoes_Clima


import { View, Text, Image } from "react-native";
import estilos from "./Estilos"


function Informacoes_Clima() {
  return (
    <View style={estilos.conteinerInformacao}>
      <View style={estilos.caixaGrausImagem}>
        <View style={estilos.caixaTemperaturaInfo}>
          <Text>28 C</Text>
          <Text>Sensação Térmica: 27 C</Text>
        </View>
        <View>
          <Image style={{width: 30, height: 30}} source={require("../../assets/icons/ceu-limpo.png")} />
        </View>
      </View>
      <View style={estilos.caixaOutrasInfo}>

      </View>
    </View>
  )
}
export default Informacoes_Clima
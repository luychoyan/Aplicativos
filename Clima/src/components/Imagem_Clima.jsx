import react from "react";
import { View, Image } from "react-native";
import estilos from "./Estilos";
import ImagensClima from "../constants/ImagensClima";

function Imagem_Clima() {
  return (
    <View style={estilos.imagem}>
      {ImagensClima.CeuLimpo2}
    </View>
  )
}

export default Imagem_Clima
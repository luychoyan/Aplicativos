import react from "react";
import { View, Image } from "react-native";
import estilos from "./Estilos";


function Imagem_Clima({dadosAPI}) {
  const codigoImagem = dadosAPI.weather[0].icon
  const url_Imagen = `https://openweathermap.org/img/wn/${codigoImagem}@2x.png`
  return (
    <Image style={estilos.imagem} source={{uri: url_Imagen}}/>
  )
}
export default Imagem_Clima
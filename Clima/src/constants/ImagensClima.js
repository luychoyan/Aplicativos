
import React from "react"
import { Image } from "react-native"
import estilos from "./Estilos"

const ImagensClima = {
  "alerta": <Image style={estilos.imagem} source={require("../assets/icons/alerta.png")}/>,
  "Clear": <Image style={estilos.imagem} source={require("../assets/icons/ceu-limpo.png")}/>,
  "chuvaforte": <Image style={estilos.imagem} source={require("../assets/icons/chuva-forte.png")}/>,
  "Rain": <Image style={estilos.imagem} source={require("../assets/icons/chuva-fraca.png")}/>,
  "chuvaMedia": <Image style={estilos.imagem} source={require("../assets/icons/chuva-media.png")}/>,
  "nublado": <Image style={estilos.imagem} source={require("../assets/icons/nuvem.png")}/>,
  "Clauds": <Image style={estilos.imagem} source={require("../assets/icons/sol-nuvem.png")}/>,
  "CeuLimpoNoite": <Image style={estilos.imagem} source={require("../assets/icons/estrelas-da-lua.png")}/>,
  "CeuNubladoNoite": <Image style={estilos.imagem} source={require("../assets/icons/sol-nuvem.png")}/>,
  "CeuPoucasNuvensNoite": <Image style={estilos.imagem} source={require("../assets/icons/nuvens-lua.png")}/>,
}

export default ImagensClima



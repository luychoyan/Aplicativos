
import React from "react"
import { Image } from "react-native"
import estilos from "./Estilos"

const ImagensClima = {
  "alerta": <Image style={estilos.imagem} source={require("../assets/icons/alerta.png")}/>,
  "CeuLimpo": <Image style={estilos.imagem} source={require("../assets/icons/ceu-limpo.png")}/>,
  "ChuvaForte": <Image style={estilos.imagem} source={require("../assets/icons/chuva-forte.png")}/>,
  "ChuvaFraca": <Image style={estilos.imagem} source={require("../assets/icons/chuva-fraca.png")}/>,
  "chuvaMedia": <Image style={estilos.imagem} source={require("../assets/icons/chuva-media.png")}/>,
  "Nublado": <Image style={estilos.imagem} source={require("../assets/icons/nuvem.png")}/>,
  "Algumas Nuvens": <Image style={estilos.imagem} source={require("../assets/icons/sol-nuvem.png")}/>,
  "CeuLimpoNoite": <Image style={estilos.imagem} source={require("../assets/icons/estrelas-da-lua.png")}/>,
  "CeuNubladoNoite": <Image style={estilos.imagem} source={require("../assets/icons/sol-nuvem.png")}/>,
  "CeuPoucasNuvensNoite": <Image style={estilos.imagem} source={require("../assets/icons/nuvens-lua.png")}/>,
}

export default ImagensClima



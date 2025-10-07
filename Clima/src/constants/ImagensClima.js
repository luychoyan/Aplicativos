
import React from "react"
import { Image } from "react-native"
import estilos from "./Estilos"

const ImagensClima = {
  "alerta": <Image style={estilos.imagem} source={require("../assets/icons/alerta.png")}/>,
  "CeuLimpo": <Image style={estilos.imagem} source={require("../assets/icons/ceu-limpo.png")}/>,
  "CeuLimpo2": <Image style={estilos.imagem} source={require("../assets/icons/ceu-limpo2.png")}/>,
  "ChuvaForte": <Image style={estilos.imagem} source={require("../assets/icons/chuva-forte.png")}/>,
  "ChuvaFraca": <Image style={estilos.imagem} source={require("../assets/icons/chuva-fraca.png")}/>,
  "chuvaMedia": <Image style={estilos.imagem} source={require("../assets/icons/chuva-media.png")}/>,
  "estrelasLua": <Image style={estilos.imagem} source={require("../assets/icons/estrelas-da-lua.png")}/>,
  "nuvem": <Image style={estilos.imagem} source={require("../assets/icons/nuvem.png")}/>,
  "nuvensSol": <Image style={estilos.imagem} source={require("../assets/icons/nuvens-sol.png")}/>,
  "solNuvens": <Image style={estilos.imagem} source={require("../assets/icons/sol-nuvem.png")}/>,
}

export default ImagensClima



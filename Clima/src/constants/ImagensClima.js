

import { Image } from "react-native"
import { StyleSheet } from "react-native"

const ImagensClima = {
  "alerta": <Image style={estilos.imagem} source={require("../assets/icons/alerta.png")}/>,
  "ceuLimpo": <Image style={estilos.imagem} source={require("../assets/icons/ceu-limpo.png")}/>,
  "ceuLimpo2": <Image style={estilos.imagem} source={require("../assets/icons/ceu-limpo2.png")}/>,
  "chuvaForte": <Image style={estilos.imagem} source={require("../assets/icons/chuva-forte.png")}/>,
  "chuvaFraca": <Image style={estilos.imagem} source={require("../assets/icons/chuva-fraca.png")}/>,
  "chuvaMedia": <Image style={estilos.imagem} source={require("../assets/icons/chuva-media.png")}/>,
  "estrelasLua": <Image style={estilos.imagem} source={require("../assets/icons/estrelas-da-lua.png")}/>,
  "nuvem": <Image style={estilos.imagem} source={require("../assets/icons/nuvem.png")}/>,
  "nuvensSol": <Image style={estilos.imagem} source={require("../assets/icons/nuvens-sol.png")}/>,
  "solNuvens": <Image style={estilos.imagem} source={require("../assets/icons/sol-nuvens.png")}/>,
}

export default ImagensClima

const estilos = StyleSheet.create({
  imagem:{
    height: 150,
    width: 150,
    resizeMode: "cover",
  }
})



import { StyleSheet } from "react-native";
import cores from "../constants/Cores";

const estilos = StyleSheet.create({
  conteinerInformacao:{
    flex: 1,
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  caixaTextoCidade:{
    height: 80,
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    marginLeft: 20,
  },
  textoCidade:{
    fontSize: 44,
    color: cores.branco,
    fontWeight: "800"
  },
  caixaGrausImagem:{
    flex: 1,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
  },
  caixaTemperaturaInfo:{
    width: 170,
    justifyContent: "center",
    alignItems: "center",
    alignItems: "flex-start"
  },
  textoGraus:{
    color: cores.branco,
    fontSize: 70,
    fontWeight: "700",
  },
  textoSensacao:{
    color: cores.branco,
    fontSize: 14,
    fontWeight: "600"
  },
  textoDescricao:{
    color: cores.branco,
    fontSize: 30,
    fontWeight: "900",
    marginTop: 10,
  },
  caixaImagem:{
    height: "100%",
    marginBottom: 80
  },
  imagem:{
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  caixaOutrasInfo:{
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 15,
  },
  caixaInfo:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  textoDetalhes:{
    fontSize: 20,
    fontWeight: "700",
    color: cores.branco,
    flexDirection: "row"
  },
  icones:{
    width: 30,
    height: 30,
    resizeMode: "cover"
  },
  textoVento:{
    fontSize: 18,
    color: cores.branco,
    fontWeight: "500"
  }
})
export default estilos
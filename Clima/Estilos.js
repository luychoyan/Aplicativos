

import { StyleSheet } from "react-native"
import cores from "./src/constants/Cores"

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    backgroundColor: cores.cinza,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: "column",
    padding: 7,
  },
  conteinerTituloInput:{
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  textoTitulo:{
    fontSize: 40,
    color: cores.branco,
    fontWeight: "900",
  },
  conteinerInputBotao:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 45,
    borderRadius: 10,
    width: 370,
    backgroundColor: cores.branco,
    padding: 7,
  },
  input:{
    width: 250,
    backgroundColor: cores.branco,
    borderRadius: 10,
    height: 44,
    paddingLeft: 10,
    fontSize: 16,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
  },
  botao:{
    backgroundColor: cores.ciano,
    height: 36,
    width: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    marginRight: -3,
    flexDirection: "row",
    gap: 7,
  },
  textoBotao:{
    color: cores.branco, 
    fontSize: 16, 
    fontWeight: "800",
  },
  icone:{
    width: 24,
    height: 24,
  }
})

export default estilos
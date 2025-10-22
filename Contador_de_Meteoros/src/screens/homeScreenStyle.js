

import { StyleSheet } from "react-native";
import { cores } from "../Colors";

export const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  containerTitle:{
    height: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  tittle:{
    color: "white",
    fontSize: 35,
    fontWeight: "900"
  },
  textSubTittle:{
    color: cores.cinzaClaro,
    fontSize: 16,
  },
  containerNumeros:{
    backgroundColor: cores.cinza,
    width: 350,
    height: 190,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  textRegistrados:{
    color: cores.cinzaClaro,
    fontSize: 28
  },
  textNumero:{
    color: cores.ciano,
    fontSize: 100,
    fontWeight: "900"
  },
  containerHoraDetectada:{
    height: 50,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
  },
  textHora:{
    color: "gray",
    fontSize: 18,
  },
  containerButtons:{
    height: 200, 
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 30,
  },
  buttonContar:{
    width: "100%",
    height: 70,
    backgroundColor: cores.lilas,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  textButtonContar:{
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  },
  buttonZerar:{
    width: "100%",
    height: 70,
    backgroundColor: cores.vermelho,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  textButtonZerar:{
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  },
  containerNotification:{
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  textNotification:{
    color: "cyan",
    fontSize: 20,
    fontWeight: "500"
  }
})
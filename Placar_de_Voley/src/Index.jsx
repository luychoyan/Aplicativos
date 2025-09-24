import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";

export default function Index() {

  const [pontoTime1, setPontoTime1] = useState(0)
  const [pontoTime2, setPontoTime2] = useState(0)

  function adicionarPontoTime1() {
    if (pontoTime1 < 99) {
      setPontoTime1(pontoTime1 + 1)
    }
  }
  function adiconarPontoTime2() {
    if (pontoTime2 < 99) {
      setPontoTime2(pontoTime2 + 1)
    }
  }
  function removerPontoTime1() {
    if (pontoTime1 > 0) {
      setPontoTime1(pontoTime1 - 1)
    }
  }
  function removerPontoTime2() {
    if (pontoTime2 > 0) {
      setPontoTime2(pontoTime2 - 1)
    }
  }

  function zerarPlacar() {
    setPontoTime1(0)
    setPontoTime2(0)
  }


  return (
    <View style={styles.container}>
        <View style={styles.blocoTime1}>

          <Text style={styles.ponto}>{pontoTime1}</Text>

          <TouchableOpacity onPress={adicionarPontoTime1} style={styles.botaoAumentar}
          activeOpacity={0.75}
          >
            <Text style={styles.textoBotao}>+1 PONTO</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={removerPontoTime1} style={styles.botaoDiminuir}
          activeOpacity={0.75}
          >
            <Text style={styles.textoBotao}>-1 PONTO</Text>
          </TouchableOpacity>
        </View>

        <View style={{justifyContent: "center", alignItems: "center"}}>

          <Text style={{color: "#F8F8FF", fontSize: 200, fontWeight: "bold"}}>X</Text>

          <TouchableOpacity onPress={zerarPlacar} style={styles.botaoZerar}
           activeOpacity={0.75}
          >
            <Text style={{color:"black", fontSize: 20, fontWeight: "bold"}}>Zerar Placar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.blocoTime2}>
          
          <Text style={styles.ponto}>{pontoTime2}</Text>
          
          <TouchableOpacity onPress={adiconarPontoTime2} style={styles.botaoAumentar} activeOpacity={0.75}
          >
            <Text style={styles.textoBotao}>+1 PONTO</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={removerPontoTime2} style={styles.botaoDiminuir} activeOpacity={0.75}
          >
            <Text style={styles.textoBotao}>-1 PONTO</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
  },
  blocoTime1:{
    flexDirection: "column",
    width: "43%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    gap: 15,
    padding: 5,
  },
  blocoTime2:{
    flexDirection: "column",
    width: "43%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
    gap: 15,
    padding: 5,
  },
  ponto:{
    fontSize: 250,
    color: "#F0F8FF",
    marginBottom: -30,
    fontWeight: "bold",
  },
  botaoAumentar:{
    backgroundColor: "#7FFF00",
    width: 150,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#F8F8FF"
  },
  botaoDiminuir:{
    backgroundColor: "#DC143C",
    width: 150,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#F8F8FF"
  },
  textoBotao:{
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  botaoZerar:{
    width: 130, 
    backgroundColor: '#D47428', 
    height: 70, 
    justifyContent: "center", 
    alignItems: "center", 
    borderRadius: 10, 
    marginLeft: 10, 
    marginRight: 10,
    padding: 3,
    borderWidth: 3,
    borderColor: "#F5F5F5",
  }
})
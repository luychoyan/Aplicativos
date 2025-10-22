import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { style } from "./homeScreenStyle";
import { useState } from "react";


export default function HomeSreen() {
  const [meteor, setMeteor] = useState(0)
  const [isVisibleNotification, setIsVisibleNotification] = useState(false)
  const [isVisibleDetector, setIsVisibleDetector] = useState(false)

  const hora = new Date()
  const horaFormatada = hora.toLocaleTimeString("pt-br") // tranforma a hora, no horario correto do Brasil

  const [horaAtual, setHoraAtual] = useState(null)

  function aumentarMeteor() {
    setMeteor(meteor + 1)
    setHoraAtual(horaFormatada)
    setIsVisibleDetector(true)
    setIsVisibleNotification(true)
    setTimeout(() => {
      setIsVisibleNotification(false)
    }, 3000)
  }

  function zerar() {
    setMeteor(0)
    setIsVisibleNotification(false)
    setIsVisibleDetector(false)
  }


  return (
    <View style={style.container}>
      <View style={style.containerTitle}>
        <Text style={style.tittle}>Contador de Meteoros</Text>
        <Text style={style.textSubTittle}>Monitoramento de Objetos Celestes</Text>
      </View>
      <View style={style.containerNumeros}>
        <Text style={style.textRegistrados}>Meteoros Registrados</Text>
        <Text style={style.textNumero}>{meteor}</Text>
      </View>
      <View style={style.containerHoraDetectada}>
        {isVisibleDetector ? 
          <Text style={style.textHora}>Ultima Detecção: {horaAtual}</Text>
          : 
          <View></View>
        }
      </View>
      <View style={style.containerButtons}>
        <TouchableOpacity onPress={() => aumentarMeteor()} style={style.buttonContar}>
          <Text style={style.textButtonContar}>CONTAR METEORO</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => zerar()} style={style.buttonZerar}>
          <Text style={style.textButtonZerar}>ZERAR CONTADOR</Text>
        </TouchableOpacity>
      </View>
      <View style={style.containerNotification}>
        {isVisibleNotification ? 
          <Text style={style.textNotification}>Meteoro Detectado! ☄️ 🚨</Text> 
          : 
          <Text></Text>}
      </View>
    </View>
  )
}

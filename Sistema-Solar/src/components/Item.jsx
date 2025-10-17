

import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { Cores } from "../Colors"
import { useNavigation } from "@react-navigation/native"

export default function Item({data}) {
  const navigation = useNavigation() // Nescessario para poder ir para outras telas
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detalhes do Planeta", {planeta: data.planeta})}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{}</Text>
        </View>
        <View>
          <Text style={styles.text}>{}</Text>
        </View>
      </View>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
  container:{
    width: 370,
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    backgroundColor: Cores.preto_medio,
    borderRadius: 15,
  },
  text:{
    color: Cores.branco,
    fontSize: 30,
  }
})
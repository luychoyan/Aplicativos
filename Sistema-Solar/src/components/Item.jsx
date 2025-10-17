

import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native"
import { Cores } from "../Colors"
import { useNavigation } from "@react-navigation/native"

export default function Item({data}) {
  const navigation = useNavigation() // Nescessario para poder ir para outras telas
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Detalhes do Planeta", {planet: data})}>
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{data.nome}</Text>
        </View>
        <View>
          <Image style={styles.image} source={data.imagem} />
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
  },
  image:{
    alignItems: "flex-start",
    justifyContent: "flex-start",
    height: "100%",
    width: 100,
    resizeMode: "cover",
  }
})
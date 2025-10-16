

import { View, Text, StyleSheet } from "react-native"

export default function Item({data}) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Imagem do planeta</Text>
      </View>
      <View>
        <Text>{data.nome}</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginVertical: 10,
    backgroundColor: "white",
    borderRadius: 15,
  }
})
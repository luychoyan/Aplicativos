import { StyleSheet, Text, View, Image } from "react-native";


export default function PlanetDetails({route}) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={{resizeMode: "cover"}} source={require("../../assets/images/saturno_icon.png")} />
      </View>
      <View>
        <Text>{}</Text>
        <Text>Classificacao do Planeta</Text>
      </View>
      <View style={styles.containerInfo}>
        <View>
          <Text>Gravidade: 3.7 m/s2</Text>
        </View>
        <View>
          <Text>Distancia do sol: 0.5 UA</Text>
        </View>
        <View>
          <Text>77 milhoes de KMs</Text>
        </View>
      </View>
      <View>
        <Text>Descricao</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: "#EEF0EF"
  },
  containerInfo:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
})
import { StyleSheet, Text, View } from "react-native";


export default function Detalhes() {
  return (
    <View style={styles.container}>
      <Text>Pagina de detalhes</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: "#EEF0EF"
  }
})
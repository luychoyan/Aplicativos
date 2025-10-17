

import { View, Text, StyleSheet, Button, FlatList } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { PLANETAS_DATA } from "../data/planetData"
import Item from "../components/Item"
import { Cores } from "../Colors"

export default function Home() {
  const navigation = useNavigation()
  return (
    <View style={style.container}>
      <FlatList showsVerticalScrollIndicator= {false} data={PLANETAS_DATA} 
      keyExtractor={item => item.id} 
      renderItem={({item}) => <Item data={item} />}/>
    </View>
  )
}
const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Cores.preto
  }
})
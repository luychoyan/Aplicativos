

import { StyleSheet, Text, View, Image} from "react-native";
import { Cores } from "../Colors";

export default function PlanetDetails({route}) {
  const planet = route.params.planet
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image style={styles.imagem} source={planet.imagem}/>
      </View>
      <View style={styles.containerInfo}>
          <View style={styles.containerTittleSubtittle}>
            <Text style={styles.tittlePlanet}>{planet.nome}</Text>
            <Text style={styles.textSubtittle}>{planet.categoria}</Text>
          </View>
          <View style={styles.containerNumbs}>
            <Text style={styles.textNumb}>Gravidade: {planet.gravidade} m/s²</Text>
            <Text style={styles.textNumb}>Distancia do Sol: {planet.distanciaSol}</Text>
            <Text style={styles.textNumb}>Distancia da Terra: {planet.distanciaTerra}</Text>
          </View>
          <View style={styles.containerTextDescription}>
            <Text style={styles.textDescription}>
              {planet.descricao}
            </Text>
          </View>
          <View style={styles.containerInfoExtra}>
            <Text style={{color: Cores.branco, fontSize: 20, fontWeight: "800", marginBottom: 10,}}>Curiosidade:</Text>
            <Text style={styles.text}>
              {planet.curiosidade}
            </Text>
          </View>
        </View>
      </View>
      
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor: Cores.preto,
    padding: 20,
  },
  containerImg:{
    width: 400,
    marginLeft: -200
  },
  imagem:{
    height: "100%",
    width: "100%",
    resizeMode: "cover"
  },
  containerInfo:{
    flexDirection: "column",
    marginLeft: 10,
    justifyContent: "flex-start",
    width: 300,
    padding: 5,
  },
  containerTittleSubtittle:{
    marginVertical: 10,
    gap: 3
  },
  tittlePlanet:{
    color: Cores.branco,
    fontSize: 30,
    fontWeight: "900"
  },
  textSubtittle:{
    color: Cores.branco,
    fontSize: 22,
  },
  containerNumbs:{
    marginVertical: 20,
    width: 240,
  },
  textNumb:{
    color: Cores.branco,
    fontSize: 18,
    fontWeight: "800"
  },
  containerTextDescription:{
    marginVertical: 10,
    paddingRight: 7,
    width: 245,
  },
  textDescription:{
    color: Cores.branco,
    fontSize: 20,
  },
  containerInfoExtra:{
    marginTop: 20,
    marginRight: 10,
    width: 250,
    paddingRight: 10,
  },
  text:{
    color: Cores.branco,
    fontSize: 16,
  }
})
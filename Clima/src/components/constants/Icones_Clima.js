import { Image } from "react-native";
import { StyleSheet } from "react-native";

const ICONES_CLIMA = {
    // Chave (Condição em Português) : Valor (Nome do Ícone Feather)
    "Ensolarado": <Image style={estilo.imagemIcones} source={require('../../assets/icons/ceu-limpo.png')} />,

    "Claro": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/estrelas-da-lua.png')}/>, // Para céu limpo à noite

    "ParcialmenteNublado": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/nuvens-sol.png')}/>,

    "Nublado": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/nuvem.png')}/>,

    "ChuvaFraca": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/chuva-fraca.png')}/>,

    "ChuvaModerada": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/chuva-media.png')}/>,

    "ChuvaForte": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/chuva-forte.png')}/>, // Trovoadas

    "Tempestade": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/ceu-limpo2.png')}/>, // Um raio/eletricidade

    "Neve": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/ceu-limpo2.png')}/>,

    "Névoa": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/ceu-limpo2.png')}/>, // Ou use 'cloud-drizzle'

    "Garoa": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/ceu-limpo2.png')}/>,

    "VentoForte": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/ceu-limpo2.png')}/>,

    // Ícone Padrão/Erro: se a API retornar algo que não conhecemos
    "Desconhecido": <Image style={estilo.imagemIcones} source={require('../../../assets/icons/alerta.png')}/> 
};

const estilo = StyleSheet.create({
    imagemIcones:{
        height: 150,
        width: 150,  
        resizeMode: "contain", 
        alignItems: "center",
        justifyContent: "center",
    },
})

export default ICONES_CLIMA;
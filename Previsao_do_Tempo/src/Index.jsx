import react from "react";
import { View, Text, TouchableHighlight, TouchableOpacity } from "react-native";
import { estilo } from "./style";
import { TextInput } from "react-native";

export default function Index() {
    return (
        <View style={estilo.conteiner}>
            <Text style={estilo.titulo}>Previsão do Tempo</Text>
            <View style={estilo.conteinerInput}>
                <TextInput
                 style={estilo.input}
                 placeholder="Digite sua cidade..."
                />

                 <TouchableOpacity activeOpacity={0.2} style={estilo.botao}>
                    <Text style={estilo.textoBotao}>Buscar</Text>
                 </TouchableOpacity>
            </View>

            <View style={estilo.conteinerInformacoes}>
                <View style={estilo.temperaturaImagem}>
                    <Text style={{fontSize: 70,}}>29 C</Text>
                    <Text>Imagem</Text>
                </View>

                <View style={estilo.detalhes}>
                    <Text>detalhes</Text>
                </View>
            </View>

            <View style={{alignItems: "center", justifyContent: "flex-end", width: "100%", padding: 5,}}>
                <Text style={{justifyContent: "center", alignItems: "center"}}>App desenvolvido por @luy_choyan</Text>
            </View>
        </View>
    )
}
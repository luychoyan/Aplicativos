import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function Tarefa({id, tarefa, apagarTarefa}) {
    return (
        <View style={estilos.tarefa}>
            <View style={estilos.conteinerTextoBotao}>

                <Text style={{fontSize: 22}}>{id}. </Text>

                <View style={{paddingRight: 5}}>
                    <Text style={estilos.texto}>{tarefa}</Text>
                </View>
                
            </View>
            
            <TouchableOpacity
            onPress={() => apagarTarefa(id)}
            style={estilos.botaoFechar}>
                <Text style={{fontSize: 22, fontWeight: "bold", color: "#F8F8FF"}}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const estilos = StyleSheet.create({
    tarefa:{
        marginBottom: 15,
        backgroundColor: "#F0FFFF",
        padding: 7,
        borderRadius: 15,
        flexDirection: 'row',
        width: "100%",
    },
    conteinerTextoBotao:{
        flex: 1,
        flexDirection: "row", 
        justifyContent: "flex-start", 
        width: 295, 
        //backgroundColor: "green",
        padding: 10,
    },
    texto:{
        fontSize: 22, 
        paddingRight: 5, 
        //backgroundColor: "yellow"
    },
    botaoFechar:{
        marginLeft: "auto", // empurra o botão para a extremidade direita
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        backgroundColor: "#6959CD",
        borderRadius: 50,
        marginRight: 5,
        padding: 3,
        marginBottom: "auto",
        marginTop: "auto", // centraliza verticalmente
    }
})
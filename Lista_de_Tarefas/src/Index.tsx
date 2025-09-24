import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { estilos } from "./style";
import Tarefa from "./components/Tarefa";
import { useState } from "react";

export default function Index() {

    const [tarefa, setTarefa] = useState("");

    const lista_das_tarefas = [];
    
    function criarTarefa() {
        <Tarefa tarefa={tarefa} />
    }

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%"}}>
            <View style={estilos.header}>
                <Text style={estilos.titulo}>Minhas Tarefas</Text>

                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%", backgroundColor: "#F0F8FF", borderRadius: 15,}}>

                    <TextInput  onChangeText={setTarefa}  style={estilos.imput} placeholder="Nova Tarefa..."/>

                    <TouchableHighlight onPress={criarTarefa}  style={estilos.botao}>
                        <Text style={{fontSize: 14, fontWeight: "bold", color: "white"}}>Adicionar</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View style={estilos.conteinerTarefas}>

                <Text style={estilos.textoSubTitulo}>Tarefas</Text>

                <View style={estilos.caixaTarefas}>
                    {lista_das_tarefas}
                </View>
            </View>
        </View>
    )
}
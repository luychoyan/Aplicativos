import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { estilos } from "./style";
import Tarefa from "./components/Tarefa";
import { useState } from "react";
import { FlatList } from "react-native";

export default function Index() {

    const [tarefas, setTarefas] = useState([]);

    const [inputText, setInputText] = useState("");

    function adicionarTarefa() {
        setTarefas({
            tarefa: inputText,
            id: tarefas.length + 1
        })
        console.log(tarefas);
        setTarefas("");
    }

    


    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%"}}>
            <View style={estilos.header}>
                <Text style={estilos.titulo}>Minhas Tarefas</Text>

                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%", backgroundColor: "#F0F8FF", borderRadius: 15,}}>

                    <TextInput value={inputText}  
                    onChangeText={setInputText}  
                    style={estilos.imput} 
                    placeholder="Nova Tarefa..."
                    />

                    <TouchableHighlight onPress={adicionarTarefa}  
                    style={estilos.botao}
                    >
                        <Text style={{fontSize: 14, fontWeight: "bold", color: "white"}}>Adicionar</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View style={estilos.conteinerTarefas}>

                <Text style={estilos.textoSubTitulo}>Tarefas</Text>

                <View style={estilos.caixaTarefas}> 
                    <Text>{tarefas}</Text>
                </View>
            </View>
        </View>
    )
}
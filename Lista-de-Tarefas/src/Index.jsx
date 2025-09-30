import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { estilos } from "./style";
import { useState } from "react";
import { ListaTarefas } from "./components/ListaTarefas";

export default function Index() {

    const [textoInput, setTextoInput] = useState("");

    const [minhasTarefas, setMinhasTarefas] = useState([])

    function adicionarTarefa() {
        // Adiciona uma nova tarefa à lista
        if (textoInput === '') return // Evita adicionar tarefas vazias
        setMinhasTarefas([...minhasTarefas, {id: minhasTarefas.length + 1, tarefa: textoInput}]) // pega o valor atual do array e adiciona um novo objeto
        setTextoInput('') // Limpa o campo de input após adicionar a tarefa
    }

    function removerTarefa(id) {
        // Função para remover tarefa (a ser implementada)
        setMinhasTarefas(minhasTarefas.filter(tarefa => tarefa.id !== id))

    }


    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%"}}>
            <View style={estilos.header}>
                <Text style={estilos.titulo}>Minhas Tarefas</Text>

                <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", width: "100%", backgroundColor: "#F0F8FF", borderRadius: 15,}}>

                    <TextInput   
                    value={textoInput}
                    onChangeText={setTextoInput}
                    style={estilos.imput} 
                    placeholder="Nova Tarefa..."
                    />

                    <TouchableHighlight   
                    onPress={() => adicionarTarefa()}
                    style={estilos.botao}
                    >
                        <Text style={{fontSize: 14, fontWeight: "bold", color: "white"}}>Adicionar</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View style={estilos.conteinerTarefas}>

                <Text style={estilos.textoSubTitulo}>Tarefas</Text>

                <ListaTarefas removerTarefa={removerTarefa} lista={minhasTarefas} />
            </View>

            <View style={{alignItems: "flex-start", justifyContent: "flex-start", padding: 5, width: "100%"}}>
                <Text>App desenvolvido por @luy_choyan</Text>
            </View>
        </View>
    )
}
import React from "react";
import { View, Text, TextInput, TouchableHighlight } from "react-native";
import { estilos } from "./style";
import { useState } from "react";
import { FlatList } from "react-native";
import { listaTarefas } from "../ListaTarefas";

export default function Index() {

    const [textoInput, setTextoInput] = useState("");


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
                    onPress={console.log(textoInput)}
                    style={estilos.botao}
                    >
                        <Text style={{fontSize: 14, fontWeight: "bold", color: "white"}}>Adicionar</Text>
                    </TouchableHighlight>

                </View>
            </View>

            <View style={estilos.conteinerTarefas}>

                <Text style={estilos.textoSubTitulo}>Tarefas</Text>

                <View style={estilos.caixaTarefas}> 

                    <FlatList
                    showsVerticalScrollIndicator={false}
                        data={listaTarefas}
                        renderItem={({item}) => (
                            <View style={estilos.tarefa}>
                                <Text style={{fontSize: 22}}>{item.id}. {item.tarefa}</Text>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        </View>
    )
}
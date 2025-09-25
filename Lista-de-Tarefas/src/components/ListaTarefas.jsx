import React from "react";
import { estilos } from "../style";
import { FlatList, Text, View } from "react-native";
import Tarefa from "./Tarefa";

export function ListaTarefas({lista, removerTarefa}) {
    return (
        <View style={estilos.caixaTarefas}> 

            <FlatList
            showsVerticalScrollIndicator={false}
                data={lista}
                renderItem={({item}) => (
                    <Tarefa apagarTarefa={removerTarefa} id={item.id} tarefa={item.tarefa} />
                )}
                keyExtractor={item => item.id}
            />
            </View>
    )
}

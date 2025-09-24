import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Tarefa({tarefa}) {
    return (
        <>
            <View style={estilos.tarefa}>
                <Text style={{fontSize: 22}}>1. {tarefa}</Text>
            </View>
        </>
    )
}

const estilos = StyleSheet.create({
    tarefa:{
        marginBottom: 15,
        backgroundColor: "#F0FFFF",
        padding: 15,
        borderRadius: 15,
    }
})
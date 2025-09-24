import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Tarefa({item}) {
    return (
        <View style={estilos.tarefa}>
            <Text style={{fontSize: 22}}>1. {item}</Text>
        </View>
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
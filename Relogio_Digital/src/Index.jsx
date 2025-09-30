import { Text, View } from "react-native";
import style, { styles } from "./styles";
import { useEffect, useState } from "react";

export function Index() {
 
    const [hora, setHora] = useState(new Date())

    const dataAtual = new Date()
    const dia = dataAtual.getDate()
    const mes = dataAtual.getMonth() + 1
    const ano = dataAtual.getFullYear()

    // serve para adicionar se precisar o numero "0" a esquerda dos numero que n tenham
    // duas casas. ex: 5, vira 05. Funciona apenas para strings!
    const horas = hora.getHours().toString().padStart(2, "0")
    const minutos = hora.getMinutes().toString().padStart(2, "0")
    const segundos = hora.getSeconds().toString().padStart(2, "0")
    

    useEffect( function() {
        const tempoId = setInterval(() => {
            setHora(new Date())
        }, 1000);
        return function() { // Serve apenas para nao da erro
            clearInterval(tempoId)
        }
    })

    return (
        <View style={styles.conteiner} >
            <View style={styles.relogio} >
                <Text style={styles.numeros}>{horas}:{minutos}:{segundos}</Text>
            </View>

            <View style={styles.data} >
                <Text style={styles.texto}>{dia} / {mes.toString().padStart(2, "0")} / {ano}</Text>
            </View>
        </View>
    )
}
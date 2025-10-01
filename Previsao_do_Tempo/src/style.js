import { StyleSheet } from "react-native"

export const estilo = StyleSheet.create({
    conteiner:{
        flex: 1,
        flexDirection: "column",
        marginTop: 90,
        width: "100%",
        padding: 10,
        justifyContent: "space-between",
        alignItems: "center",
    },
    titulo:{
        fontSize: 28,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    conteinerInput:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "white",
        padding: 3,
        borderRadius: 10,
        height: 50,
        
    },
    input:{
        backgroundColor: "white",
        width: 270,
        height: 50,
        borderRadius: 7,
        padding: 3,
        fontSize: 18,
        paddingLeft: 10,
    },
    botao:{
        width: 80,
        color: "green",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        backgroundColor: "#00c1c4ff",
        height: 40,
        marginLeft: 5,
    },
    textoBotao:{
        fontSize: 16,
        fontWeight: "bold",
        margin: "auto",  
        color: "white"
    },
    conteinerInformacoes:{
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    temperaturaImagem:{
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "row",
        backgroundColor: "green",
        width: 400,
        height: 300,
    },
    detalhes:{
        justifyContent: "center",
        alignItems: "center",
        height: 300,
        width: 400,
        backgroundColor: "yellow"
    }
})
import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    header:{
        flex: 1, 
        justifyContent: "space-evenly", 
        alignItems: "center", 
        flexDirection: "column", 
        height: "50%", 
        backgroundColor: "#6959CD", 
        width: 400, 
        padding: 10,
        paddingTop: 20,
    },
    titulo:{
        fontSize: 40, 
        justifyContent: "flex-start", 
        width:"100%", 
        color: "white", 
        fontWeight: "bold"
    },
    imput:{
        width: 280,
        height: 80,
        padding: 10,
        borderRadius: 10,
        color: "#black",
        fontSize: 26,
    },
    botao:{
        backgroundColor: "#6959CD",
        padding: 15,
        borderRadius: 15,
        marginRight: 10,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
    },
    conteinerTarefas:{
        flex: 2, 
        justifyContent: "center", 
        alignItems: "center", 
        flexDirection: "column",  
        width: 400,
        backgroundColor: "#e6e6e6ff",
        borderRadius: 15,
        padding: 10,
        paddingBottom: 0,
        marginTop: -30
    },
    textoSubTitulo:{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        fontSize: 28,
        fontWeight: "bold",
        color: "#6959CD",
        width: "100%"
    },
    caixaTarefas:{
        flex: 9,
        width: "100%",
        marginTop: -20,
        padding: 7,
    },
})
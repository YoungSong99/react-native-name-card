import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        elevation: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },

    avatar: {
        height: 70,
        width: 70,
        borderRadius: 50,
        marginBottom: 10,
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },

    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5,
    },

    texts: {
        flex: 1,
        paddingLeft: 15,
    },

    social: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },

});
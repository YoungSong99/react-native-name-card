import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
        borderRadius: 10,
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
        justifyContent: "space-evenly",
        padding: 10,
    },

    socialBtn: {
        height: 45,
        width: 45,
        borderRadius: 50,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        justifyContent: "center",
    },

});
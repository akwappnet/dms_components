// src/components/Button.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const DmsOldButton = ({ title, onPress }) => (<TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>);
const styles = StyleSheet.create({
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    text: {
        color: "#FFF",
        fontSize: 16,
    },
});
export default DmsOldButton;
//# sourceMappingURL=DmsOldButton.js.map
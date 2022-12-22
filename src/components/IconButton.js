import { StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton(props) {
  return (
    <Pressable
      style={[styles.button]}
      onPress={props.onPress}
    >
      <Ionicons
        name={props.icon}
        size={props.size}
        style={{textAlign: "center"}}
        color={props.color}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
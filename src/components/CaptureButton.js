import { StyleSheet, View, Pressable } from "react-native";

export default function CaptureButton(props) {
  return (
    <>
      <Pressable style={[styles.button]} onPress={props.onPress}>
        <View style={[styles.circle]} backgroundColor={props.color} />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({

  circle: {
    position: "relative",
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: "#fff",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",

  },
});
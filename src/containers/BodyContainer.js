import { Text, StyleSheet, View } from "react-native";

export default function BodyContainer(props) {
  return (
    <View style={[styles.container]}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:3,
    alignItems: "center",
    flexDirection: 'row',
    height: 60,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
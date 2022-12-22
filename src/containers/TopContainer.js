import { Text, StyleSheet, View } from "react-native";

export default function TopContainer(props) {
  return (
    <View style={[styles.container]}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:0.6,
    flexDirection: 'row',
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
    marginHorizontal: 40,
  },
});
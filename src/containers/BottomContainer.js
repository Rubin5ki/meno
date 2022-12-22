import { Text, StyleSheet, View } from "react-native";

export default function BottomContainer(props) {
  return (
    <View style={[styles.container]}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 0.8,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 60,
  },
});
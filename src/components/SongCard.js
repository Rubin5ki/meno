import { StyleSheet, View, Pressable, Text } from "react-native";

export default function CaptureButton(props) {
  return (
     <View style={parentContainerStyles}>
        <View style={[styles.Card]} backgroundColor={props.color} OnPress={props.OnPress}>
          <Text styles={[]}>
            {props.name}
          </Text>
        </View>
      </View>
  );
}

const parentContainerStyles = {
  alignItems: 'center',
  justifyContent: 'center',
};

const styles = StyleSheet.create({

  Card: {
    flex: 1,
    position: "realativ",
    height: 30,
    width: 200,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },

  text: {
    color: "black",
    position: "relative",
    alignItems: "center",
    justifyContent: "center", 
    fontSize: 25,
  }

});
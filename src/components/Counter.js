import { StyleSheet, View, Text } from "react-native";

export default function Counter(props) {
  
  return (
    <View style={parentContainerStyles}>
  <View style={styles.circle}>
    <Text style={[styles.text]}>{props.counter}</Text>
  </View>
</View>
        
  );
}

const parentContainerStyles = {
    alignItems: 'center',
    justifyContent: 'center',
  };

const styles = StyleSheet.create({

  circle: {
    flexDirection: 'row',
    position: "relative",
    alignItems: "center",
    justifyContent: "center", 
    width: 150,
    height: 150,
    borderRadius: 360,
    borderWidth: 3,
    borderColor: "#fff",
    opacity: 0.3,
    backgroundColor: "transparent",
    
  },

  text: {
    color: "#fff",
    position: "relative",
    alignItems: "center",
    justifyContent: "center", 
    fontSize: 55,
  }
});
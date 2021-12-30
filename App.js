import { StyleSheet, View, Button } from "react-native";
import { DrawStaff } from "./components/DrawStaff";
import { Playground } from "./components/Playground";

export default function App() {
  return (
    <View style={styles.container}>
      <DrawStaff></DrawStaff>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    flexDirection: "column"
  },
  staves: {
    flex: 1,
    flexDirection: "row"
  }
});

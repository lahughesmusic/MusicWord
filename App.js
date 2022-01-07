import { Picker, StyleSheet, View } from "react-native";
import { DrawStaff } from "./components/DrawStaff";

export default function App() {
  return (
    <View style={styles.container}>
      <DrawStaff />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  }
});

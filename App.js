import { Picker, StyleSheet, View } from "react-native";
import { DrawStaff } from "./components/DrawStaff";
import NoteModal from "./components/Modal";

export default function App() {
  return (
    <View style={styles.container}>
      <DrawStaff />
      {/* <NoteModal></NoteModal> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue"
  }
});

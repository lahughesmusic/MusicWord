import { StyleSheet, View, Text } from "react-native";
import {
  TC1,
  TD1,
  TE1,
  TF1,
  TG1,
  TA1,
  TB1,
  TC2,
  TD2,
  TE2,
  TF2,
  TG2,
  TA2,
  TB2,
  TC3
} from "./components/Treble";
import { BA1, BG1, BF1, BE1, BD1, BC2, BB2, BA2, BG2 } from "./components/Bass";
const words = require("./assets/word.json");
const word = words.words[4];
export default function App() {
  return (
    <View style={[styles.container]}>
      <View style={[styles.staves]}>
        <TC2 />
      </View>
      <View style={[styles.staves]}>
        <TA1 />
      </View>
      {/* <Text style={{ flex: 1 }}>{word}</Text> */}
      <View style={[styles.staves]}>
        <TG1 />
      </View>
      <View style={[styles.staves]}>
        <TE2 />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 70,
    backgroundColor: "lightblue",
    flexDirection: "row"
  },
  staves: {
    flex: 1,
    height: 70
  }
});

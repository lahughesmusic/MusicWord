import Svg, { Line, Circle } from "react-native-svg";
import { StyleSheet, View, TextInput } from "react-native";

const MiddleCBass = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="6"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Line x1="0" y1="16" x2="200" y2="16" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="32" x2="200" y2="32" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="48" x2="200" y2="48" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="64" x2="200" y2="64" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="80" x2="200" y2="80" stroke="black" strokeWidth="1" />
        {/* C Line */}
        <Line x1="35" y1="6" x2="65" y2="6" stroke="black" strokeWidth="1" />
      </Svg>
      <TextInput
        style={[styles.playground]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const MiddleCTreble = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="94"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Line x1="0" y1="16" x2="200" y2="16" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="32" x2="200" y2="32" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="48" x2="200" y2="48" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="64" x2="200" y2="64" stroke="black" strokeWidth="1" />
        <Line x1="0" y1="80" x2="200" y2="80" stroke="black" strokeWidth="1" />
        {/* C Line */}
        <Line x1="35" y1="94" x2="65" y2="94" stroke="black" strokeWidth="1" />
      </Svg>
      <TextInput
        style={[styles.playground]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  playground: {
    padding: 200,
    flex: 1
  }
});

export { MiddleCBass, MiddleCTreble };

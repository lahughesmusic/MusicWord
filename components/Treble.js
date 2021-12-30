import { StyleSheet, View, Text, TextInput } from "react-native";
import Svg, { Circle, Line } from "react-native-svg";
import Lines from "./Lines";
import word from "../assets/word.json";
import {
  TrebleEasy,
  TrebleMedium,
  TrebleHard,
  BassEasy,
  BassMedium,
  BassHard
} from "./CYnums";

const Experiment = () => {
  return (
    <View>
      <Svg>
        <Text>HEY YOU WORKING</Text>
        <Circle
          cx="50"
          cy="4"
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
      </Svg>
    </View>
  );
};

const TC1 = () => {
  return (
    <View>
      <Svg>
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const TD1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="88"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TE1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="80"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TF1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="72"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TG1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="64"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TA1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="56"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TB1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="48"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TC2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="40"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>

      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const TD2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="32"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const TE2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="24"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};
const TF2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="16"
          r="5"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="TC2"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

// TODO//
const TG2 = () => {
  return <View></View>;
};
const TA2 = () => {
  return <View></View>;
};
const TB2 = () => {
  return <View></View>;
};
const TC3 = () => {
  return <View></View>;
};

const staff = StyleSheet.create({
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
    textAlign: "center",
    width: 100,
    height: 40,
    fontSize: 30
  }
});

export {
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
  TC3,
  Experiment
};

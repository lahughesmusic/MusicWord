import { StyleSheet, View, TextInput } from "react-native";
import Svg, { Circle } from "react-native-svg";
import Lines from "./Lines";

const BA1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="16"
          r="7"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="BA1"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const BG1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="24"
          r="6"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
      </Svg>
      <TextInput
        style={[staff.input]}
        note="BG1"
        keyboardType="ascii-capable"
      ></TextInput>
    </View>
  );
};

const BF1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="32"
          r="6"
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

const BE1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="40"
          r="6"
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

const BD1 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="48"
          r="6"
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

const BC2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="56"
          r="6"
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

const BB2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="64"
          r="6"
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

const BA2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="72"
          r="6"
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

const BG2 = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy="80"
          r="6"
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

export { BA1, BG1, BF1, BE1, BD1, BC2, BB2, BA2, BG2 };

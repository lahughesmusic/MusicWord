import { StyleSheet, View, TextInput } from "react-native";
import Svg, { Circle } from "react-native-svg";
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

const outsideLetters = [];
const musicalLetters = [];

function getNote() {
  //pick random word from word.json

  let letters = word.words[Math.floor(Math.random() * 73)];
  letters = letters.split("");
  const musicalAlphabet = word.musicLetters;

  //check if letter is part of musical alphabet
  for (let i = 0; i < letters.length; i++) {
    if (musicalAlphabet.includes(letters[i])) {
      musicalLetters.push(letters[i]);
      outsideLetters.push(i);
    } else {
      outsideLetters.push(letters[i]);
      musicalLetters.push(i);
    }
  }
  console.log(outsideLetters);
  console.log(musicalLetters);
  return outsideLetters, musicalLetters;
}

getNote();

const cy = [];

function getCYTrebleEasy() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    cy.push(TrebleEasy[musicalLetters[i]]);
  }
}

function getCYTrebleMedium() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    cy.push(TrebleMedium[musicalLetters[i]]);
  }
  console.log("this is cy array " + cy);
}

getCYTrebleMedium();

//get back the CY number for circle placement (note)
function getCYTrebleHard() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    cy.push(TrebleHard[musicalLetters[i]]);
  }
}

function getCYBassEasy() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    cy.push(BassEasy[musicalLetters[i]]);
  }

  function getCYBassMedium() {
    //use musicalLetters to find object key
    for (let i = 0; i < musicalLetters.length; i++) {
      cy.push(BassMedium[musicalLetters[i]]);
    }
  }

  function getCYBassHard() {
    //use musicalLetters to find object key
    for (let i = 0; i < musicalLetters.length; i++) {
      cy.push(BassHard[musicalLetters[i]]);
    }
  }
}

const experiment = () => {
  return (
    <View>
      <Svg>
        <Circle
          cx="50"
          cy={TrebleBassHard}
          r="6"
          stroke="black"
          strokeWidth="2.5"
          fill="black"
        />
        <Lines />
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
const TE1 = () => {
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
const TF1 = () => {
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
const TG1 = () => {
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
const TA1 = () => {
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
const TB1 = () => {
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
const TC2 = () => {
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

const TD2 = () => {
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

const TE2 = () => {
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
          r="7"
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
    height: 30,
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
  TC3
};

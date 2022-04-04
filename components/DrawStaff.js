import Svg, { Line, Circle } from "react-native-svg";
import { StyleSheet, View, Text, TextInput, Picker, Modal } from "react-native";
import {
  TrebleEasy,
  TrebleMedium,
  TrebleHard,
  BassEasy,
  BassMedium,
  BassHard
} from "./CYnums";

import { Lines } from "./Lines";
import { useState } from "react";

const words = require("../assets/word.json");
let outsideLetters = [];
let musicalLetters = [];
let cy = [];

function getNote() {
  //pick random word from word.json
  musicalLetters = [];
  outsideLetters = [];

  let letters = words.words[Math.floor(Math.random() * 74)];
  letters = letters.split("");
  const musicalAlphabet = words.musicLetters;

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

function isNumber(val) {
  // negative or positive
  return /^[-]?\d+$/.test(val);
}

function getCYTrebleHard() {
  cy = [];
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    if (!isNumber(musicalLetters[i])) {
      cy.push(TrebleHard[musicalLetters[i]]);
    } else {
      cy.push(false);
    }
  }
  console.log(cy);
}

const DrawStaff = () => {
  getNote();
  getCYTrebleHard();
  const [value, setValue] = useState({});
  // guessNote();

  const data = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
    { label: "C", value: "C" },
    { label: "D", value: "D" },
    { label: "E", value: "E" },
    { label: "F", value: "F" },
    { label: "G", value: "G" }
  ];

  const list = () => {
    const [text, setText] = useState("");
    return cy.map((element, i) => {
      if (!cy[i]) {
        console.log(false);
        return (
          <View key={i}>
            <Svg style={styles.staves}>{/* <Lines></Lines> */}</Svg>
            <Text key={i} style={styles.text}>
              {outsideLetters[i].toUpperCase()}
            </Text>
          </View>
        );
      } else {
        return (
          <View key={i} style={styles.container}>
            <View>
              <Svg>
                <Circle
                  cx="50"
                  cy={cy[i]}
                  r="5"
                  stroke="black"
                  strokeWidth="2.5"
                  fill="black"
                />
                <Line
                  x1="0"
                  y1="16"
                  x2="400"
                  y2="16"
                  stroke="black"
                  strokeWidth="1"
                />
                <Line
                  x1="0"
                  y1="32"
                  x2="400"
                  y2="32"
                  stroke="black"
                  strokeWidth="1"
                />
                <Line
                  x1="0"
                  y1="48"
                  x2="400"
                  y2="48"
                  stroke="black"
                  strokeWidth="1"
                />
                <Line
                  x1="0"
                  y1="64"
                  x2="400"
                  y2="64"
                  stroke="black"
                  strokeWidth="1"
                />
                <Line
                  x1="0"
                  y1="80"
                  x2="400"
                  y2="80"
                  stroke="black"
                  strokeWidth="1"
                />
              </Svg>
            </View>
            <View>
              <TextInput
                style={styles.textInput}
                maxLength={1}
                name={musicalLetters[i]}
                textAlign="center"
                onChangeText={(text) => setText(text)}
              />
              <Text>{text}</Text>
            </View>
          </View>
        );
      }
    });
  };

  return <View style={styles.staves}>{list()}</View>;
};

const styles = StyleSheet.create({
  staves: {
    flex: 1,
    flexDirection: "row",
    marginTop: 90,
    height: 100,
    padding: 10
  },
  text: {
    fontSize: 40,
    marginBottom: 130
  },
  textInput: {
    marginHorizontal: 10,
    marginBottom: 300,
    height: 100,
    padding: 10,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    fontSize: 30
  },
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    marginTop: 150
  },
  modal: {
    height: 100,
    width: 100
  }
});

export { DrawStaff };

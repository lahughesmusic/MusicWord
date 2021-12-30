import Svg, { Line, Circle } from "react-native-svg";
import { StyleSheet, View, Button } from "react-native";
import { Lines } from "./Lines";
const words = require("../assets/word.json");
import { Note } from "./Note";
import {
  TrebleEasy,
  TrebleMedium,
  TrebleHard,
  BassEasy,
  BassMedium,
  BassHard
} from "./CYnums";

let outsideLetters = [];
let musicalLetters = [];

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

let cy = [];
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
  const list = () => {
    return cy.map((element, i) => {
      if (!cy[i]) {
        return <Lines />;
      } else {
        return (
          <Svg key={i} style={styles.staves}>
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
    height: 100,
    padding: 25
  }
});

export { DrawStaff };

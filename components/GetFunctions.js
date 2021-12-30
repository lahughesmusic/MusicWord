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

//separate musical letters from non musical letters, place in outsideLetters[] and musicalLetter[] accordingly

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

// *******************************************************

//cy values
const cy = [];
function getCYTrebleEasy() {
  //use musicalLetters to find object key

  for (let i = 0; i < musicalLetters.length; i++) {
    if (musicalLetters[i].isNumber) {
      cy.push(BassEasy[musicalLetters[i]]);
    } else {
      cy.push("0");
    }
  }
}

function getCYTrebleMedium() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    if (musicalLetters[i].isNumber) {
      cy.push(BassEasy[musicalLetters[i]]);
    } else {
      cy.push("0");
    }
  }
  console.log("this is cy array " + cy);
}

function getCYTrebleHard() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    if (musicalLetters[i].isNumber) {
      console.log(cy);
      return cy.push(BassEasy[musicalLetters[i]]);
    } else {
      console.log(cy);
      return cy.push("0");
    }
  }
}

function getCYBassEasy() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    if (musicalLetters[i].isNumber) {
      cy.push(BassEasy[musicalLetters[i]]);
    } else {
      cy.push("0");
    }
  }
}

function getCYBassMedium() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    if (musicalLetters[i].isNumber) {
      cy.push(BassEasy[musicalLetters[i]]);
    } else {
      cy.push("0");
    }
  }
}

function getCYBassHard() {
  //use musicalLetters to find object key
  for (let i = 0; i < musicalLetters.length; i++) {
    if (musicalLetters[i].isNumber) {
      cy.push(BassEasy[musicalLetters[i]]);
    } else {
      cy.push("0");
    }
  }
}

export {
  getNote,
  getCYTrebleEasy,
  getCYTrebleMedium,
  getCYTrebleHard,
  getCYBassEasy,
  getCYBassMedium,
  getCYBassHard
};

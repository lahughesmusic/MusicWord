import { View, StyleSheet, Image } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import React, { useState } from "react";

const data = [
  { label: "A", value: "1" },
  { label: "B", value: "2" },
  { label: "C", value: "3" },
  { label: "D", value: "4" },
  { label: "E", value: "5" },
  { label: "F", value: "6" },
  { label: "G", value: "7" }
];

// const Playground = () => {};

// export default Playground;

const styles = StyleSheet.create({
  dropdown: {
    margin: 20,
    height: 50,
    width: 30,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5
  },
  icon: {
    marginRight: 5
  },
  placeholderStyle: {
    fontSize: 16
  },
  selectedTextStyle: {
    fontSize: 10
  },
  iconStyle: {
    width: 20,
    height: 20
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16
  }
});

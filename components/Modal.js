// App.js
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Button
} from "react-native";

export default class NoteModal extends Component {
  // initial state
  state = {
    isVisible: false
  };

  // hide show modal
  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          animationType={"fade"}
          //   presentationStyle={"pageSheet"}
          transparent={true}
          visible={this.state.isVisible}
        >
          <View>
            <Button title="A"></Button>
            <Button title="B"></Button>
            <Button title="C"></Button>
            <Button title="D"></Button>
            <Button title="E"></Button>
            <Button title="F"></Button>
            <Button title="G"></Button>
          </View>
        </View>

        <TouchableOpacity
          style={styles.touchNoteButton}
          onPress={() => {
            this.displayModal(true);
          }}
        >
          <Text>Choose Note</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  touchNoteButton: {
    width: "20%",
    height: "5%",

    backgroundColor: "lightgreen",
    marginHorizontal: "40%",
    alignItems: "center"
  }
});

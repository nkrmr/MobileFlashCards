import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class AddCard extends Component {
  state = {
    question: "",
    answer: ""
  };
  render() {
    const { deck, handleForm } = this.props;
    return (
      <View style={styles.container}>
        <Text>Add a new question to {deck.title}</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ question: text })}
          value={this.state.question}
        />
        <Text>Answer</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ answer: text })}
          value={this.state.answer}
        />
        <Button
          onPress={() => handleForm(this.state)}
          title="Submit"
          color="#841584"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    width: 300,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20
  }
});

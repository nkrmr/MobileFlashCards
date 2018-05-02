import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default class AddDeck extends Component {
  state = {
    title: ""
  };
  render() {
    const { handleForm } = this.props;
    return (
      <View style={styles.container}>
        <Text>Add a new deck</Text>
        <TextInput
          style={styles.input}
          onChangeText={text => this.setState({ title: text })}
          value={this.state.title}
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

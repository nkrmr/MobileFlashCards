import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HOME } from "../../../navigation/constants";

class Quiz extends Component {
  state = {
    displayAnswer: false,
    index: 0,
    correct: 0
  };
  render() {
    const { deck, navigation } = this.props;
    const { index, correct } = this.state;
    const currentQuestion = deck.questions[index];
    return (
      <View style={styles.container}>
        {!currentQuestion && (
          <View>
            <Text>Results</Text>
            <Text>
              {this.state.correct} of {deck.questions.length} are correct!
            </Text>
            <Button
              onPress={() =>
                this.setState({
                  displayAnswer: false,
                  index: 0,
                  correct: 0
                })
              }
              title="RESTART"
              color="red"
            />
            <Button
              onPress={() => navigation.navigate(HOME)}
              title="GO BACK TO LIST"
              color="green"
            />
          </View>
        )}
        {currentQuestion && (
          <View>
            <Text>
              Question {index + 1}/{deck.questions.length}
            </Text>
            <Text>{currentQuestion.question}</Text>
            <Button
              onPress={() => this.setState({ displayAnswer: true })}
              title="Answer"
              color="#841584"
            />
            {this.state.displayAnswer && (
              <View>
                <Text>{currentQuestion.answer}</Text>
                <Button
                  onPress={() =>
                    this.setState({
                      displayAnswer: false,
                      index: index + 1
                    })
                  }
                  title="INCORRECT"
                  color="red"
                />
                <Button
                  onPress={() =>
                    this.setState({
                      displayAnswer: false,
                      index: index + 1,
                      correct: correct + 1
                    })
                  }
                  title="CORRECT"
                  color="green"
                />
              </View>
            )}
          </View>
        )}
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
  }
});

export default Quiz;

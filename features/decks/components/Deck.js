import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import DeckItem from "./DeckItem";
import { QUIZ, ADD_CARD } from "../../../navigation/constants";

const Deck = ({ deck, navigation }) => {
  return (
    <View style={styles.container}>
      <DeckItem deck={deck} />
      <View style={styles.actions}>
        <Button
          onPress={() =>
            navigation.navigate(QUIZ, { name: deck.title, question: 0 })
          }
          title="Start a quiz"
          color="#841584"
        />
        <Button
          onPress={() => navigation.navigate(ADD_CARD, { name: deck.title })}
          title="Add a new question"
          color="#841584"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  actions: {
    paddingTop: 200
  }
});

export default Deck;

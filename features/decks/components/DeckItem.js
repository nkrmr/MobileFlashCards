import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DeckItem = ({ deck }) => {
  return (
    <View>
      <Text style={styles.deckTitle}>{deck.title}</Text>
      <Text style={styles.deckCards}>{deck.questions.length} cards</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deckTitle: {
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20,
    width: "100%"
  },
  deckCards: {
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 20
  }
});

export default DeckItem;

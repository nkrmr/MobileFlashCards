import React from "react";
import { StackNavigator } from "react-navigation";

import DecksTabs from "./DecksTabs";
import Deck from "../features/decks/containers/Deck";
import AddCard from "../features/decks/containers/AddCard";
import Quiz from "../features/decks/containers/Quiz";

const Navigation = StackNavigator({
  Home: {
    screen: DecksTabs
  },
  Deck: {
    screen: Deck,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      backgroundColor: "#FFFFFF",
      titleColor: "#000000"
    })
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      backgroundColor: "#FFFFFF",
      titleColor: "#000000"
    })
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.name,
      backgroundColor: "#FFFFFF",
      titleColor: "#000000"
    })
  }
});

export default Navigation;

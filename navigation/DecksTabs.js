import React from "react";
import { Platform, StatusBar } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

import Decks from "../features/decks/containers/Decks";
import AddDeck from "../features/decks/containers/AddDeck";

const DecksTabs = TabNavigator(
  {
    Decks: {
      screen: Decks,
      navigationOptions: {
        tabBarLabel: "Decks List"
      }
    },
    AddDecks: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: "Add Deck"
      }
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {}
  }
);

export default DecksTabs;

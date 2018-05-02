import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from "react-native";
import DeckItem from "./DeckItem";
import { DECK } from "../../../navigation/constants";

const Decks = ({ decks, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>App of Decks</Text>
      </View>
      <View style={styles.separator} />
      <FlatList
        style={styles.list}
        data={Object.values(decks).map(d => d)}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(DECK, { name: item.title })}
          >
            <DeckItem deck={item} />
          </TouchableOpacity>
        )}
        keyExtractor={item => item.title}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%"
  },
  header: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 65,
    backgroundColor: "#FFF"
  },
  title: {
    fontSize: 36,
    fontWeight: "bold"
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#CED0CE"
  }
});

export default Decks;

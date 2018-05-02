import { AsyncStorage } from "react-native";
import { DECKS_STORAGE_KEY } from "./_decks";

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(res => {
    const data = JSON.parse(res);
    return data;
  });
}

export function getDeck(key) {
  return getDecks().then(data => {
    return data[key];
  });
}

export function saveDeckTitle(key) {
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [key]: { title: key, questions: [] }
    })
  ).then(res => getDeck(key));
}

export function addCardToDeck(key, payload) {
  return getDecks().then(data => {
    const decks = data;
    decks[key].questions.push(payload);
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
    return decks;
  });
}

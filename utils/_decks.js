import { AsyncStorage } from "react-native";

export const DECKS_STORAGE_KEY = "MobileFlashCards:decks";

const initialData = initialDecks => {
  AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialDecks));
};

export default initialData;

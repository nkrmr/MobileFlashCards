import { combineReducers } from "redux";
import initialState from "../initialState";
import { GET_DECKS, ADD_NEW_DECK, ADD_CARD_TO_DECK } from "../actions/types";

const decks = (state = initialState.decks, action) => {
  switch (action.type) {
    case GET_DECKS:
      return { ...action.decks };

    case ADD_NEW_DECK:
      return {
        ...state,
        [action.title]: { title: action.title, questions: [] }
      };

    case ADD_CARD_TO_DECK:
      return {
        ...state,
        [action.title]: {
          ...state[action.title],
          questions: [
            ...state[action.title].questions,
            { question: action.question, answer: action.answer }
          ]
        }
      };

    default:
      return state;
  }
};

export default combineReducers({
  decks: decks
});

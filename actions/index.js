import * as actions from "./types";

function action(dispatch, type, payload = {}) {
  dispatch({ type, ...payload });
  return Promise.resolve();
}
export const addNewDeckRedux = data => dispatch =>
  action(dispatch, actions.ADD_NEW_DECK, data);

export const addCardToDeckRedux = data => dispatch =>
  action(dispatch, actions.ADD_CARD_TO_DECK, data);

export const initialState = () => dispatch =>
  action(dispatch, actions.INIT_STATE, {});

export default {};

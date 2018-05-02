import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/AddDeck";
import { addNewDeckRedux } from "../../../actions";
import { saveDeckTitle } from "../../../utils/api";
import { DECK } from "../../../navigation/constants";
import {
  clearLocalNotification,
  setLocalNotification
} from "../../../utils/helpers";

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleForm: ({ title }) => {
      saveDeckTitle(title).then(deck => {
        console.log(deck);
        dispatch(addNewDeckRedux({ title }));
        clearLocalNotification(setLocalNotification);
        ownProps.navigation.navigate(DECK, { name: title });
      });
    }
  };
}
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const AddDeck = enhance(Component);

export default AddDeck;

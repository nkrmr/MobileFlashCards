import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/AddCard";
import { addCardToDeckRedux } from "../../../actions";
import { addCardToDeck } from "../../../utils/api";
import { DECK } from "../../../navigation/constants";

function mapStateToProps(state, ownProps) {
  return {
    deck: Object.values(state.decks).filter(
      d => d.title === ownProps.navigation.state.params.name
    )[0],
    navigation: ownProps.navigation
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    handleForm: ({ question, answer }) => {
      const name = ownProps.navigation.state.params.name;
      addCardToDeck(name, {
        question,
        answer
      }).then(decks => {
        dispatch(
          addCardToDeckRedux({
            title: name,
            question: question,
            answer: answer
          })
        );
        ownProps.navigation.navigate(DECK, { name: name });
      });
    }
  };
}
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const AddCard = enhance(Component);

export default AddCard;

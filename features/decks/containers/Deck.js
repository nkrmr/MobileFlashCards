import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/Deck";

function mapStateToProps(state, ownProps) {
  return {
    deck: Object.values(state.decks).filter(
      d => d.title === ownProps.navigation.state.params.name
    )[0],
    navigation: ownProps.navigation
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {};
}
const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({})
);
const Deck = enhance(Component);

export default Deck;

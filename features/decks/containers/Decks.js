import { connect } from "react-redux";
import { compose, lifecycle } from "recompose";

import Component from "../components/Decks";

function mapStateToProps(state, ownProps) {
  return {
    decks: state.decks,
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
const Decks = enhance(Component);

export default Decks;

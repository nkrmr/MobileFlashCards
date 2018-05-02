import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import Navigation from "./navigation/AppStack";
import { orange } from "./utils/colors";
import CustomStatusBar from "./features/app/components/CustomStatusBar";
import initialData from "./utils/_decks";
import initialState from "./initialState";
import { setLocalNotification } from "./utils/helpers";

import store from "./store";

export default class App extends Component {
  componentDidMount() {
    initialData(initialState.decks);
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <CustomStatusBar backgroundColor={orange} barStyle="light-content" />
          <Navigation />
        </View>
      </Provider>
    );
  }
}

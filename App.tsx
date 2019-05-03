/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import NavigationService from "./src/utils/navigate-sevice";
import Screens from "./src/screens/app-router";
import configureStore from "./src/configStore";

const { store, persistor } = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Screens
            ref={nav => {
              NavigationService.setTopNavigator(nav);
            }}
          />
        </PersistGate>
      </Provider>
    );
  }
}

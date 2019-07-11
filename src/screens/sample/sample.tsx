import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import {
  NavigationScreenProps,
  NavigationScreenOptions,
  ScrollView
} from "react-navigation";

import { withMappedNavigationParams } from "react-navigation-props-mapper";
import { Color } from "../../values/color";
import { BlockButton } from "../../components/button";
import { ScreenIds } from "../../values";

import { createRandColor } from "../../utils/help";
interface Props {
  name: string;
}
interface State {}

export default class SampleScreen extends Component<
  NavigationScreenProps & Props,
  State
> {
  static navigationOptions = ({
    navigation
  }: NavigationScreenProps): NavigationScreenOptions => {
    return {
      title: "Sample"
    };
  };
  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor={Color.Theme} />

        <BlockButton
          text="Line-Bar-Progress"
          onPress={() => {
            this.props.navigation.navigate(ScreenIds.Line_Bar_Progress);
          }}
          buttonStyle={{ backgroundColor: createRandColor() }}
        />

        <BlockButton
          text="Radio-View"
          onPress={() => {
            this.props.navigation.navigate(ScreenIds.Radio_View);
          }}
          buttonStyle={{ backgroundColor: createRandColor() }}
        />

        <BlockButton
          text="progress-bar"
          onPress={() => {
            this.props.navigation.navigate(ScreenIds.Progress_View);
          }}
          buttonStyle={{ backgroundColor: createRandColor() }}
        />
      </ScrollView>
    );
  }
}

/*

*/

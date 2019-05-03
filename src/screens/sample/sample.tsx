import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import {
  NavigationScreenProps,
  NavigationScreenOptions
} from "react-navigation";
import { withMappedNavigationParams } from "react-navigation-props-mapper";

interface Props {
  name: string;
}
interface State {}

@withMappedNavigationParams()
export default class SampleScreen extends Component<
  NavigationScreenProps & Props,
  State
> {
  static navigationOptions = ({
    navigation
  }: NavigationScreenProps): NavigationScreenOptions => {
    return {
      title: navigation.getParam("name")
    };
  };
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate("Home");
        }}
      >
        <Text>Test也买你测试</Text>
        <Text>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}

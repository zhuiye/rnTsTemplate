import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";
import {
  NavigationScreenProps,
  NavigationScreenOptions,
  NavigationEvents
} from "react-navigation";
import { ScreenIds } from "../../values";

interface Props {
  title: string;
}

interface State {
  name: string;
  age: number;
}

export default class MainHomeScreen extends Component<
  Props & NavigationScreenProps,
  State
> {
  static navigationOptions = (): NavigationScreenOptions => {
    return {
      title: "主页"
    };
  };
  state: State = {
    name: "hengcheng",
    age: 20
  };
  componentDidMount() {
    /** */
  }
  render() {
    return (
      <View>
        <NavigationEvents
          onWillBlur={() => {
            // console.log("将要失去焦点");
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    backgroundColor: "gray",
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

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

interface Props {
  title: string;
}

interface State {
  name: string;
  age: number;
}

export default class NoticeScreen extends Component<
  Props & NavigationScreenProps,
  State
> {
  static navigationOptions = (): NavigationScreenOptions => {
    return {
      header: null
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
        <Text>通知页面</Text>
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

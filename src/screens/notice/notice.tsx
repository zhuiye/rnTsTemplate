import React, { Component } from "react";
import ProgressBar from "../../components/progressBar";
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
        <ProgressBar width={400} height={8} active={50} total={100} />
        <ProgressBar width={400} height={8} active={100} total={300} />
        <ProgressBar
          width={400}
          height={8}
          active={50}
          total={300}
          activeStyle={{ backgroundColor: "red" }}
        />

        <Text>xxx</Text>
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

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
import withReducerState from "../../store/withReducerState";
import { ApplicationState, UserActionProp } from "../../store";
import { ScreenIds } from "../../values";
interface Props {
  title: string;
}

interface State {
  name: string;
  age: number;
}

class UserScreen extends Component<
  Props & NavigationScreenProps & ApplicationState & UserActionProp,
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
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.navigation.navigate(ScreenIds.Sample);
          }}
        >
          <Text>simple---</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            this.props.loginOut();
            this.props.navigation.navigate(ScreenIds.Auth_Stack);
          }}
        >
          <Text>退出登陆</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default withReducerState(UserScreen);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "gray",
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});

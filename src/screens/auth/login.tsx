import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import withReducerState from "../../store/withReducerState";
import { ApplicationState, UserActionProp } from "../../store";
import { ScreenIds } from "../../values";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormInput } from "./components/form-input";
import { commomStyle } from "../../values/comom-style";

interface State {
  account: string;
  password: string;
}
class LoginScreen extends Component<
  NavigationScreenProps & ApplicationState & UserActionProp,
  State
> {
  state = {
    account: "",
    password: ""
  };
  render() {
    const { account, password } = this.state;
    return (
      <View style={commomStyle.conatiner}>
        <FormInput
          icon={require("../../assets/user-fill.png")}
          placeholder="请输入你的账号"
          value={account}
          onChangeText={value => {
            this.setState({ account: value });
          }}
        />
        <FormInput
          icon={require("../../assets/lock-fill.png")}
          placeholder="请输入你的账号"
          value={password}
          onChangeText={value => {
            this.setState({ password: value });
          }}
        />
        <TouchableHighlight
          style={styles.btn}
          onPress={() => {
            // console.log(this.props);
            this.props.doLogin();
            this.props.navigation.navigate(ScreenIds.Main_Tab_Navigator);
          }}
        >
          <Text>登陆</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default withReducerState(LoginScreen);
const styles = StyleSheet.create({
  btn: {
    height: 30,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center"
  }
});

import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  StatusBar
} from "react-native";
import { NavigationScreenProps } from "react-navigation";
import withReducerState from "../../store/withReducerState";
import { ApplicationState, UserActionProp } from "../../store";
import { ScreenIds } from "../../values";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FormInput } from "./components/form-input";
import { BlockButton } from "../../components/button";
import { commomStyle } from "../../values/comom-style";
import { Color } from "../../values/color";

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
      <View style={[commomStyle.conatiner, styles.conatiner]}>
        <StatusBar barStyle="dark-content" backgroundColor={Color.White} />
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/logo.png")}
            style={{ width: 50, height: 50 }}
          />
        </View>
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
          placeholder="请输入你的密码"
          value={password}
          secureTextEntry={true}
          onChangeText={value => {
            this.setState({ password: value });
          }}
        />
        <BlockButton
          text="登录"
          onPress={() => {
            this.props.doLogin();
            this.props.navigation.navigate(ScreenIds.Main_Tab_Navigator);
          }}
          disabled={false}
          disableText="正在登陆中..."
        />
      </View>
    );
  }
}

export default withReducerState(LoginScreen);
const styles = StyleSheet.create({
  conatiner: {
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center"
  }
});

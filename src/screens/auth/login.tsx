import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import withReducerState from "../../store/withReducerState";
import { ApplicationState, UserActionProp } from "../../store";
import { ScreenIds } from "../../values";

class LoginScreen extends Component<
  NavigationScreenProps & ApplicationState & UserActionProp
> {
  render() {
    return (
      <View>
        <Text>登陆页面</Text>
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

import React, { Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { NavigationScreenProps } from "react-navigation";
import { ScreenIds } from "../values";
import withReducerState from "../store/withReducerState";
import { ApplicationState } from "../store";

class LoadingScreen extends Component<
  NavigationScreenProps & ApplicationState
> {
  componentDidMount() {
    const login = this.props.user.login;
    if (login) {
      this.props.navigation.navigate(ScreenIds.Main_Tab_Navigator);
    } else {
      this.props.navigation.navigate(ScreenIds.Auth_Stack);
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>数据加载中...</Text>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}

export default withReducerState(LoadingScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

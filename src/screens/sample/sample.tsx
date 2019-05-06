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
import { RadioGroup } from "../../components/select";
import { Color } from "../../values/color";

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
        <RadioGroup
          responseData={selectData => {
            console.log(selectData);
          }}
          defaultIcon={require("../../assets/radio_box_default.png")}
          selectedIcon={require("../../assets/radio_box.png")}
          direction="right"
          defaultSelect={{ key: "001", text: "日本", value: "japan" }}
          data={[
            { key: "001", text: "日本", value: "japan" },
            { key: "002", text: "中国", value: "chinese" },
            { key: "003", text: "美国", value: "asds", disable: true }
          ]}
        />

        <RadioGroup
          responseData={selectData => {
            console.log(selectData);
          }}
          defaultIcon={require("../../assets/radio_box_default.png")}
          selectedIcon={require("../../assets/radio_box.png")}
          direction="left"
          defaultSelect={{ key: "001", text: "电脑", value: "computer" }}
          data={[
            { key: "001", text: "电脑", value: "computer" },
            { key: "002", text: "钢琴", value: "painor" },
            { key: "003", text: "书", value: "books" }
          ]}
        />

        <RadioGroup
          responseData={selectData => {
            console.log(selectData);
          }}
          RadioGropContainer={{ flexDirection: "row", flexWrap: "wrap" }}
          defaultIcon={require("../../assets/radio_box_default.png")}
          selectedIcon={require("../../assets/radio_box.png")}
          direction="left"
          defaultSelect={{ key: "001", text: "日本", value: "japan" }}
          data={[
            { key: "001", text: "日本", value: "japan" },
            { key: "002", text: "中国", value: "chinese" },
            { key: "003", text: "美国", value: "asds" },
            { key: "004", text: "英国", value: "asssds" }
          ]}
        />
      </ScrollView>
    );
  }
}

/*

*/

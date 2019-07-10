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
import ProgressBar from "../../components/progressBar";

import { withMappedNavigationParams } from "react-navigation-props-mapper";
import { RadioGroup } from "../../components/select";
import { Color } from "../../values/color";
import Progress from "../../components/progress";

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
        <ProgressBar width={400} height={8} active={50} total={100} />
        <ProgressBar width={400} height={8} active={100} total={300} />
        <ProgressBar
          width={400}
          height={8}
          active={50}
          total={300}
          activeStyle={{ backgroundColor: "red" }}
        />

        <Progress
          title="level"
          dataList={[
            { text: "$100", value: 100, levelText: "LV1" },
            { text: "$200", value: 200, levelText: "LV2" },
            { text: "$300", value: 300, levelText: "LV3" },
            { text: "$400", value: 400, levelText: "LV4" },
            { text: "$500", value: 500, levelText: "LV5" },
            { text: "$600", value: 600, levelText: "LV6" },
            { text: "$700", value: 700, levelText: "LV7" },
            { text: "$800", value: 800, levelText: "LV8" },
            { text: "$900", value: 900, levelText: "LV9" },
            { text: "$1000", value: 1000, levelText: "LV10" }
          ]}
          reachAmount={100}
        />
      </ScrollView>
    );
  }
}

/*

*/

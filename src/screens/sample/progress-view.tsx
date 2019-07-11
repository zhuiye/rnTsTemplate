import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  NavigationScreenProps,
  NavigationScreenOptions,
  ScrollView
} from "react-navigation";
import Progress from "../../components/progress";

interface Props {}
interface State {}
export default class ProgressView extends React.Component<
  Props & NavigationScreenProps,
  State
> {
  static navigationOptions = ({ navigation }: NavigationScreenProps) => {
    return {
      title: "ProgressView"
    };
  };

  render() {
    return (
      <ScrollView>
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

        <Progress
          scrollViewStyle={{ backgroundColor: "#f2d585" }}
          barColor="gray"
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
const styles = StyleSheet.create({});

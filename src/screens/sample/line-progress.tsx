import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  NavigationScreenProps,
  NavigationScreenOptions,
  ScrollView
} from "react-navigation";
import ProgressBar from "../../components/progressBar";
import { createRandColor } from "../../utils/help";

interface Props {}
interface State {}
export default class LineBarProgress extends React.Component<
  Props & NavigationScreenProps,
  State
> {
  static navigationOptions = ({
    navigation
  }: NavigationScreenProps): NavigationScreenOptions => {
    return {
      title: "LineBarProgress"
    };
  };
  render() {
    return (
      <ScrollView>
        <ProgressBar
          width={400}
          height={8}
          active={50}
          total={100}
          activeStyle={{ backgroundColor: createRandColor() }}
        />
        <ProgressBar
          width={400}
          height={8}
          active={100}
          total={300}
          activeStyle={{ backgroundColor: createRandColor() }}
        />
        <ProgressBar
          width={400}
          height={8}
          active={50}
          total={300}
          activeStyle={{ backgroundColor: createRandColor() }}
        />
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({});

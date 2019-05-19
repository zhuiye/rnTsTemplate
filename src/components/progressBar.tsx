import React, { Component } from "react";
import { View, Text, StyleSheet, ViewStyle, Animated } from "react-native";
import { FrameSize } from "../values";
import { Color } from "../values/color";

interface ProgressBarProps {
  width: number;
  height?: number;
  active: number;
  activeStyle?: ViewStyle;
  total: number;
}
interface State {
  activeWidth: Animated.AnimatedValue;
}
export default class ProgressBar extends Component<ProgressBarProps> {
  state: State = {
    activeWidth: new Animated.Value(0)
  };
  componentDidMount() {
    const { width, total, active } = this.props;

    const barWidth = FrameSize.horizontalRatio * width;
    const activeBarWidth = (active / total) * barWidth;
    Animated.timing(
      // Animate over time
      this.state.activeWidth, // The animated value to drive
      {
        toValue: activeBarWidth, // Animate to opacity: 1 (opaque)
        duration: 5000 // Make it take a while
      }
    ).start(); // Starts the animation
  }
  render() {
    const { width, total, active, activeStyle } = this.props;
    const { activeWidth } = this.state;

    const barWidth = FrameSize.horizontalRatio * width;
    const activeBarWidth = (active / total) * barWidth;

    const labelWidth = active.toString().length * 14;
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.labelContainer,
            { width: barWidth, height: labelWidth }
          ]}
        >
          <View
            style={[
              styles.labelBox,
              {
                left: activeBarWidth - labelWidth / 2,
                width: labelWidth,
                height: labelWidth,
                borderRadius: labelWidth / 2
              }
            ]}
          >
            <Text style={styles.lableText}>{active}</Text>
          </View>
        </View>
        <View style={[styles.barContainer, { width: barWidth }]}>
          <View style={[styles.totalContainer, { width: barWidth }]} />
          <Animated.View
            style={[
              styles.activeContainer,
              { width: activeWidth },
              activeStyle
            ]}
          />
        </View>
        <View>
          <Text>
            <Text style={styles.textActivedStyle}>{active}</Text>/{total}
          </Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flexDirection: "column",
    // alignItems: "center"
  },
  labelContainer: {
    height: 20,
    position: "relative"
  },
  labelBox: {
    position: "absolute",
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  lableText: {
    color: Color.White
  },
  barContainer: {
    width: FrameSize.width,
    height: 10,
    borderRadius: 8,
    position: "relative"
  },
  totalContainer: {
    width: FrameSize.width,
    backgroundColor: Color.containerColor,
    height: 10,
    borderRadius: 8
  },
  activeContainer: {
    width: 100,
    height: 10,
    borderRadius: 8,
    position: "absolute",
    backgroundColor: Color.Theme
  },
  textActivedStyle: {
    color: Color.Theme
  }
});

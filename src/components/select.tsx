import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageRequireSource,
  Image,
  ViewStyle,
  TextStyle
} from "react-native";
import Touchable from "react-native-platform-touchable";
import { SIZE } from "../values";

interface RadioData {
  key: string;
  text: string;
  value: string;
  disable?: boolean;
}
export interface RadioProps {
  data: RadioData[];
  defaultSelect?: RadioData;
  selectedIcon: ImageRequireSource;
  defaultIcon: ImageRequireSource;
  activeTextStyle?: TextStyle;
  defaultTextStyle?: TextStyle;
  responseData: (selectdata: RadioData) => void;
  direction?: "right" | "left";
  RadioGropContainer?: ViewStyle;
  groupItemStyle?: ViewStyle;
}
interface State {
  selectData: RadioData;
}
export class RadioGroup extends Component<RadioProps, State> {
  constructor(props: RadioProps) {
    super(props);
    this.state = {
      selectData: this.props.defaultSelect || {
        key: "",
        text: "",
        value: ""
      }
    };
  }

  handlePress = (item: RadioData) => {
    this.setState({ selectData: item });
    this.props.responseData(item);
  };
  render() {
    const {
      data,
      selectedIcon,
      defaultIcon,
      direction = "left",
      groupItemStyle,
      activeTextStyle,
      defaultTextStyle,
      RadioGropContainer
    } = this.props;
    const { selectData } = this.state;
    // console.log(selectData);
    return (
      <View style={[styles.defalutContainer, RadioGropContainer]}>
        {data.map(item => {
          const { text, disable, key } = item;
          let Icon = defaultIcon;
          let textStyle = defaultTextStyle || styles.defaultTextStyle;

          if (selectData.key === key) {
            Icon = selectedIcon;
            textStyle = activeTextStyle || styles.defaultActiveText;
          }
          return (
            <Touchable
              key={key}
              onPress={this.handlePress.bind(this, item)}
              disabled={disable}
            >
              {direction === "left" ? (
                <View style={[styles.groupItem, groupItemStyle]}>
                  <Image source={Icon} style={[styles.defaultIconStyle]} />
                  <Text style={textStyle}>{text}</Text>
                </View>
              ) : (
                <View style={[styles.groupItem, groupItemStyle]}>
                  <Text style={textStyle}>{text}</Text>
                  <Image source={Icon} style={[styles.defaultIconStyle]} />
                </View>
              )}
            </Touchable>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defalutContainer: {},
  RadioGropContainer: {},
  groupItem: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZE.SPACE_16
  },
  defaultIconStyle: {
    marginLeft: SIZE.SPACE_16
  },
  defaultTextStyle: {
    marginLeft: SIZE.SPACE_16
  },
  defaultActiveText: {
    marginLeft: SIZE.SPACE_16,

    color: "red"
  }
});

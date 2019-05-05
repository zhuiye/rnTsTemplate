import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageRequireSource,
  Image
} from "react-native";
import { Touchable } from "react-native-platform-touchable";

interface RadioData {
  key: string;
  text: string;
  value: string;
  disable?: boolean;
}
export interface RadioProps {
  data: RadioData[];
  selectedIcon: ImageRequireSource;
  defaultIcon: ImageRequireSource;
  onPress: () => void;
  responseData: (selectdata: RadioData) => {};
}
interface State {
  selectData: RadioData;
}
export class RadioGroup extends Component<RadioProps, State> {
  State = {
    selectData: {
      key: "",
      text: "",
      value: ""
    }
  };
  handlePress = (item: RadioData) => {
    this.setState({ selectData: item });
    this.props.responseData(item);
  };
  render() {
    const {
      data,
      onPress,
      responseData,
      selectedIcon,
      defaultIcon
    } = this.props;
    const { selectData } = this.state;
    return (
      <View>
        {data.map(item => {
          const { text, disable, key } = item;
          const Icon = selectData.key === key ? selectedIcon : defaultIcon;
          return (
            <Touchable
              key={key}
              onPress={this.handlePress.bind(this, item)}
              disabled={disable}
            >
              <View style={styles.btnView}>
                <Image source={Icon} />
                <Text>{text}</Text>
              </View>
            </Touchable>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnView: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

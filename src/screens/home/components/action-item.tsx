import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FrameSize, SIZE } from "../../../values";
import Touchable from "react-native-platform-touchable";
import { Color } from "../../../values/color";

interface Props {
  uri: string;
  text: string;
  badget?: number;
}
interface State {}

const MatrixItem: React.FunctionComponent<Props> = ({ uri, text, badget }) => {
  return (
    <Touchable style={styles.itemWrapperContainer}>
      <View style={styles.itemInnerContainer}>
        <Image source={{ uri }} style={styles.iconStyle} />
        <Text style={styles.textStyle}>{text}</Text>
        {badget && (
          <View style={styles.badgetContainer}>
            <Text style={styles.badgetText}>{badget}</Text>
          </View>
        )}
      </View>
    </Touchable>
  );
};

export default MatrixItem;

const styles = StyleSheet.create({
  itemWrapperContainer: {
    width: FrameSize.horizontalRatio * 83.75,
    height: 80,
    marginTop: SIZE.SPACE_8
  },
  itemInnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  iconStyle: {
    width: 42,
    height: 42,
    borderRadius: 21
  },
  textStyle: {
    marginTop: 4
  },
  badgetText: {
    color: Color.White
  },
  badgetContainer: {
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    top: 0
  }
});

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Touchable from "react-native-platform-touchable";
import { Color } from "../values/color";
import { SIZE } from "../values";

export interface BlockButtonProps {
  text: string;
  disableText: string;

  onPress: () => void;
  disabled: boolean;
}
export const BlockButton = ({ text, disabled, onPress }: BlockButtonProps) => {
  return (
    <Touchable
      onPress={onPress}
      disabled={disabled}
      style={styles.btnContainer}
    >
      <View style={styles.btnView}>
        <Text style={styles.textStyle}>{text}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: SIZE.SPACE_16
  },
  btnView: {
    height: 52,
    backgroundColor: Color.Theme,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    color: Color.White
  }
});

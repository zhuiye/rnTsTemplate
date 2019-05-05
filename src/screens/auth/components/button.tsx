import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Touchable } from "react-native-platform-touchable";

export interface BlockButtonProps {
  text: string;
  disableText: string;

  onPress: () => void;
  disabled: boolean;
}
export const BlockButton = ({ text, disabled, onPress }: BlockButtonProps) => {
  return (
    <Touchable onPress={onPress} disabled={disabled}>
      <View style={styles.btnView}>
        <Text>{text}</Text>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  btnView: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});

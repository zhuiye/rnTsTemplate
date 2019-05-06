import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageRequireSource,
  TextInput,
  TextInputProps
} from "react-native";
import { Color } from "../../../values/color";
import { SIZE } from "../../../values";
export interface SomeFormInputProps {
  icon: ImageRequireSource;
}
type FormInputProps = SomeFormInputProps & TextInputProps;
export const FormInput = ({ icon, ...textInputProps }: FormInputProps) => {
  return (
    <View style={styles.formInputContainer}>
      <Image source={icon} style={{ tintColor: Color.Theme }} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          underlineColorAndroid="transparent"
          {...textInputProps}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formInputContainer: {
    flexDirection: "row",
    height: 52,
    alignItems: "center",
    borderColor: "#13227a",
    borderBottomWidth: 1
  },
  inputContainer: {
    paddingLeft: SIZE.SPACE_12
  },
  textInput: {
    flex: 1
  }
});

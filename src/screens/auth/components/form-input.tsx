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
export interface SomeFormInputProps {
  icon: ImageRequireSource;
}
type FormInputProps = SomeFormInputProps & TextInputProps;
export const FormInput = ({ icon, ...textInputProps }: FormInputProps) => {
  return (
    <View style={styles.formInputContainer}>
      <Image source={icon} />
      <TextInput
        style={styles.textInput}
        underlineColorAndroid="transparent"
        {...textInputProps}
      />
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
  textInput: {
    flex: 1
  }
});

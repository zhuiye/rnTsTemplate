import React, { Component } from "react";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const ScreenWidth = 375;
const ScreenHeight = 750;
export const FrameSize = {
  width,
  height,
  horizontalRatio: ScreenWidth / 375,
  verticalRatio: ScreenHeight / 750
};

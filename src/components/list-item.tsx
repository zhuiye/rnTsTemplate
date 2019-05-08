import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Image,
  StatusBar
} from "react-native";
import {
  NavigationScreenProps,
  NavigationScreenOptions,
  NavigationEvents
} from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import { ScreenIds, FrameSize, SIZE } from "../values";
import Swiper from "react-native-swiper";
import { commomStyle } from "../values/comom-style";
import { Color } from "../values/color";
import Touchable, {
  PlatformTouchableProps
} from "react-native-platform-touchable";

export interface ListItemProps {
  avatar: string;
  rightArrow: boolean;
  touchablePoprs: PlatformTouchableProps;
}

export const ListItem: React.FunctionComponent<ListItemProps> = ({
  touchablePoprs,
  avatar,
  rightArrow
}) => {
  return (
    <Touchable {...touchablePoprs}>
      <View style={styles.container}>
        <View style={styles.itemLeft}>
          {avatar && <Image source={{ uri: avatar }} />}
          <Text>xxx</Text>
        </View>
        <View style={styles.itemRight}>
          <Text>xxx</Text>
          {rightArrow && <Text>这边来个vetico</Text>}
        </View>
      </View>
    </Touchable>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: SIZE.SPACE_16,
    backgroudColor: Color.White,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    elevation: 20
  },
  itemLeft: {
    flex: 1
  },
  itemRight: {
    flex: 1
  }
});

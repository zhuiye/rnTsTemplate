/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  NavigationScreenProps,
  BottomTabNavigatorConfig
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoadingScreen from "../components/loading-screen";
import MainHomeScreen from "./home/home";
import NoticeScreen from "./notice/notice";
import UserScreen from "./user/user";
import LoginScreen from "./auth/login";
import SampleScreen from "./sample/sample";
import ProgressView from "./sample/progress-view";
import LineBarProgress from "./sample/line-progress";
import RadioView from "./sample/radio-view";
import { ScreenIds } from "../values";
import { Color } from "../values/color";

const homeIcon = require("../assets/tabIcon/home.png");
const homeUnFocuns = require("../assets/tabIcon/home_unfocus.png");
const noticeIcon = require("../assets/tabIcon/notice.png");
const noticeUnfocus = require("../assets/tabIcon/notice_unfocus.png");
const userIcon = require("../assets/tabIcon/user.png");
const userUnfocus = require("../assets/tabIcon/user_unfocus.png");
const simpleIcon = require("../assets/tabIcon/heart-fill.png");
const simpleUnIcon = require("../assets/tabIcon/un-heart-fill.png");

const MainTabNavigator = createBottomTabNavigator(
  {
    [ScreenIds.Main_Home]: {
      screen: MainHomeScreen,
      navigationOptions: {
        tabBarLabel: "home",
        header: null
      }
    },
    [ScreenIds.Notice_Home]: {
      screen: NoticeScreen,
      navigationOptions: {
        tabBarLabel: "notice"
      }
    },
    [ScreenIds.User_Home]: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: "mine"
      }
    },
    [ScreenIds.Sample]: {
      screen: SampleScreen,
      navigationOptions: {
        tabBarLabel: "Sample"
      }
    }
  },
  {
    initialRouteName: ScreenIds.Main_Home,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon: any = "";
        if (routeName === ScreenIds.Main_Home) {
          icon = focused ? homeIcon : homeUnFocuns;
        } else if (routeName === ScreenIds.User_Home) {
          icon = focused ? userIcon : userUnfocus;
        } else if (routeName === ScreenIds.Notice_Home) {
          icon = focused ? noticeIcon : noticeUnfocus;
        } else if (routeName === ScreenIds.Sample) {
          icon = focused ? simpleIcon : simpleUnIcon;
        }

        // You can return any component that you like here!
        return <Image source={icon} style={{ width: 24, height: 24 }} />;
      }
    }),
    tabBarOptions: {
      // tabStyle: { backgroundColor: Color.Theme },
      activeTintColor: Color.Theme,
      inactiveTintColor: Color.Gray
    }
  }
);
MainTabNavigator.navigationOptions = {
  // Hide the header from AppNavigator stack
  header: null
};
/*
  给MianTabNavigator设置标题   https://reactnavigation.org/docs/zh-Hans/navigation-options-resolution.html
  MainTabNavigator.navigationOptions = ({
    navigation
  }: NavigationScreenProps) => {
    const { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    const headerTitle = routeName;

    return {
      headerTitle
    };
  };
*/
const AppStack = createStackNavigator(
  {
    [ScreenIds.Main_Tab_Navigator]: MainTabNavigator,
    [ScreenIds.Progress_View]: ProgressView,
    [ScreenIds.Radio_View]: RadioView,
    [ScreenIds.Line_Bar_Progress]: LineBarProgress
    // [ScreenIds.Sample]: SampleScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: Color.White,
      headerStyle: {
        backgroundColor: Color.Theme
      }
    }
  }
);
const AuthStack = createStackNavigator(
  { [ScreenIds.Auth_Login]: LoginScreen },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    [ScreenIds.Auth_Loading]: LoadingScreen,
    [ScreenIds.App_Stack]: AppStack,
    [ScreenIds.Auth_Stack]: AuthStack
  },
  {
    initialRouteName: ScreenIds.Auth_Loading
  }
);

export default createAppContainer(SwitchNavigator);

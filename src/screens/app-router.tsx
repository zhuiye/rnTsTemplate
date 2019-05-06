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
import { ScreenIds } from "../values";
import { Color } from "../values/color";

const homeIcon = require("../assets/tabIcon/home.png");
const homeUnFocuns = require("../assets/tabIcon/home_unfocus.png");
const noticeIcon = require("../assets/tabIcon/notice.png");
const noticeUnfocus = require("../assets/tabIcon/notice_unfocus.png");
const userIcon = require("../assets/tabIcon/user.png");
const userUnfocus = require("../assets/tabIcon/user_unfocus.png");

const MainTabNavigator = createBottomTabNavigator(
  {
    [ScreenIds.Main_Home]: {
      screen: MainHomeScreen,
      navigationOptions: {
        tabBarLabel: "主页",
        header: null
      }
    },
    [ScreenIds.Notice_Home]: {
      screen: NoticeScreen,
      navigationOptions: {
        tabBarLabel: "通知"
      }
    },
    [ScreenIds.User_Home]: {
      screen: UserScreen,
      navigationOptions: {
        tabBarLabel: "我的"
      }
    }
  },
  {
    initialRouteName: ScreenIds.Main_Home,
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let icon: any = "";
        if (routeName === "Main_Home") {
          icon = focused ? homeIcon : homeUnFocuns;
        } else if (routeName === "User_Home") {
          icon = focused ? userIcon : userUnfocus;
        } else if (routeName === "Notice_Home") {
          icon = focused ? noticeIcon : noticeUnfocus;
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
    [ScreenIds.Sample]: SampleScreen
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

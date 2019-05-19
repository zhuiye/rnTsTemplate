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
import { ScreenIds, FrameSize, SIZE } from "../../values";
import Swiper from "react-native-swiper";
import { commomStyle } from "../../values/comom-style";
import { Color } from "../../values/color";
import MatrixItem from "./components/action-item";
interface Props {
  title: string;
}

interface State {}

export default class MainHomeScreen extends Component<
  Props & NavigationScreenProps,
  State
> {
  static navigationOptions = (): NavigationScreenOptions => {
    return {
      title: "主页"
    };
  };
  state: State = {};
  componentDidMount() {
    /** */
  }
  _renderSwiperIte = () => {
    return;
  };

  render() {
    const swiperData = [
      {
        uri:
          "https://cn.bing.com/th?id=OHR.LightHouseNS_ZH-CN9060766128_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      },
      {
        uri:
          "https://cn.bing.com/th?id=OHR.StMaryFalls_ZH-CN8917284967_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      },
      {
        uri:
          "https://cn.bing.com/th?id=OHR.AmericanCulturalCapital_ZH-CN8717487767_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"
      }
    ];
    return (
      <View style={commomStyle.conatiner}>
        <StatusBar backgroundColor={Color.Theme} />
        <NavigationEvents
          onWillBlur={() => {
            // console.log("将要失去焦点");
          }}
        />

        <View style={styles.wrapper}>
          <Swiper
            style={styles.wrapper}
            activeDotColor={Color.White}
            autoplay={true}
          >
            {swiperData.map((item, index) => {
              return (
                <View style={[styles.itemContainer]} key={index}>
                  <Image
                    style={styles.swiperPic}
                    source={{
                      uri: item.uri
                    }}
                  />
                </View>
              );
            })}
          </Swiper>
        </View>

        <View style={styles.matrixContainer}>
          <MatrixItem uri={swiperData[0].uri} text="AcceptCar" badget={10} />
          <MatrixItem uri={swiperData[0].uri} text="dispatcher" />
          <MatrixItem uri={swiperData[0].uri} text="Assignment" />
          <MatrixItem uri={swiperData[0].uri} text="maintain" />
          <MatrixItem uri={swiperData[0].uri} text="help" />
          <MatrixItem uri={swiperData[0].uri} text="AcceptCar" />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: FrameSize.width * FrameSize.horizontalRatio,
    height: 162,
    backgroundColor: Color.Theme
  },
  swiperPic: {
    width: 375 * FrameSize.horizontalRatio,
    height: 142,
    borderRadius: 4
  },
  itemContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  linearGradient: {
    flex: 1
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  matrixContainer: {
    marginTop: SIZE.SPACE_20,
    marginHorizontal: SIZE.SPACE_20 * FrameSize.horizontalRatio,
    paddingBottom: SIZE.SPACE_10,
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: Color.White,
    borderRadius: 8
  }
});

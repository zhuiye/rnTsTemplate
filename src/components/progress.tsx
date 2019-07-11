import React from "react";
import { ScrollView, Text, View, StyleSheet, ViewStyle } from "react-native";

interface ProgressProps {
  containerStyle?: ViewStyle;
  scrollViewStyle?: ViewStyle;
  title?: string;
  reachAmount: number;
  dataList: Array<{ text: string; value: number; levelText: string }>;
  distance?: number;
  barColor?: string;
  activeBarColor?: string;
}
const Progress: React.FunctionComponent<ProgressProps> = ({
  reachAmount,
  dataList,
  title,
  containerStyle,
  scrollViewStyle,
  distance = 112,
  barColor,
  activeBarColor
}) => {
  let reachWidth = 0;
  let rangeIndex = 0;
  let rangeEnd = 0;
  let levelChai = 0; // 等级之间的差
  // tslint:disable-next-line: prefer-for-of
  for (let i = 0; i < dataList.length; i++) {
    if (dataList[i].value >= reachAmount) {
      rangeIndex = dataList[i].value === reachAmount ? i + 1 : i;

      rangeEnd = dataList[i].value;
      levelChai =
        i !== 0 ? dataList[i].value - dataList[i - 1].value : dataList[0].value;

      break;
    }
  }
  reachWidth =
    rangeIndex * distance +
    (rangeIndex === 0 ? 0 : 6) +
    (rangeEnd === reachAmount
      ? 0
      : (1 - (rangeEnd - reachAmount) / levelChai) * distance);

  return (
    <View style={containerStyle}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        bounces={false}
        style={StyleSheet.flatten([
          { backgroundColor: "#638CFF" },
          scrollViewStyle
        ])}
      >
        <View>
          <View style={[styles.container, { height: 30 }]}>
            {!!title && (
              <HintText left={0} text={title} isActived={true} fontSize={12} />
            )}
            {dataList.map((item, key) => (
              <LevelBox
                activeTextcolor={
                  scrollViewStyle && scrollViewStyle.backgroundColor
                }
                left={distance * (key + 1)}
                key={key}
                text={item.levelText}
                isActived={reachAmount >= item.value}
              />
            ))}
          </View>

          <View style={styles.container}>
            <Bar
              type="total"
              width={(dataList.length + 1) * distance}
              color={barColor}
            />
            <Bar type="reach" width={reachWidth} color={activeBarColor} />
            {dataList.map((item, key) => (
              <Dot
                key={key}
                left={(distance + 0.5) * (key + 1)}
                isActived={reachAmount >= item.value}
              />
            ))}
          </View>

          <View style={[styles.container, { height: 30 }]}>
            {dataList.map((item, key) => (
              <HintText
                key={key}
                text={item.text}
                left={distance * (key + 1)}
                isActived={reachAmount >= item.value}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
interface DotProps {
  left: number;
  isActived?: boolean;
}
const Dot = ({ left, isActived }: DotProps) => {
  return (
    <View style={[styles.DotContainer, { left }]}>
      <View style={styles.outCircle} />
      <View style={[styles.innerCircle, isActived && { opacity: 1 }]} />
    </View>
  );
};
interface HintTextProps {
  isActived?: boolean;
  fontSize?: number;
  text: string;
  left: number;
}
const HintText = ({ text, isActived, left, fontSize }: HintTextProps) => (
  <View style={[styles.textContainer, { left }]}>
    <Text
      style={[
        styles.hintTextStyle,
        !isActived && { opacity: 0.5 },
        fontSize ? { fontSize } : null
      ]}
    >
      {text}
    </Text>
  </View>
);

interface LevelBoxProps {
  text: string;
  left: number;
  isActived?: boolean;
  activeTextcolor?: string;
}
const LevelBox = ({
  left,
  isActived,
  text,
  activeTextcolor
}: LevelBoxProps) => {
  return (
    <View
      style={[styles.levelBox, { left }, !isActived && styles.unActiveLevelBox]}
    >
      <Text
        style={[
          styles.levelText,
          !isActived && styles.unActiveLevelText,
          isActived ? { color: activeTextcolor } : null
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

interface BarProps {
  type: "total" | "reach";
  color?: string;
  width: number;
}
const Bar = ({ type, width, color }: BarProps) => (
  <View
    style={[
      type === "total" ? styles.totalBar : styles.reachedBar,
      { width },
      color ? { backgroundColor: color } : undefined
    ]}
  />
);
const styles = StyleSheet.create({
  levelContainer: {
    width: 100,
    backgroundColor: "green",
    height: 40
  },
  levelBox: {
    borderRadius: 4,
    paddingHorizontal: 4,
    backgroundColor: "#fff",
    position: "absolute"
  },
  levelText: {
    color: "#038FFF",
    fontSize: 11,
    fontWeight: "bold"
  },
  unActiveLevelBox: {
    borderRadius: 4,
    paddingHorizontal: 4,
    backgroundColor: "transparent",
    position: "absolute",
    borderWidth: 1,
    borderColor: "#fff"
  },
  unActiveLevelText: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold"
  },
  container: {
    position: "relative",
    height: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  totalBar: {
    height: 4,
    borderRadius: 4,
    backgroundColor: "#fff",
    opacity: 0.1
  },
  reachedBar: {
    position: "absolute",
    height: 4,
    borderRadius: 4,
    backgroundColor: "#fff",
    zIndex: 20
  },
  DotContainer: {
    position: "absolute",
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 30
  },
  outCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    opacity: 0.2
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: "#fff",
    opacity: 0.6,
    position: "absolute"
  },
  textContainer: {
    position: "absolute"
  },
  hintTextStyle: {
    fontSize: 11,
    color: "#fff",
    opacity: 1,
    fontWeight: "bold"
  }
});
export default Progress;

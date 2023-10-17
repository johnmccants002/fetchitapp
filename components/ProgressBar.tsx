import { useContext, useEffect, useState } from "react";
import { View, Animated } from "react-native";
import { FlashCardsContext } from "./FlashCardsContext";

const ProgressBar = () => {
  const context = useContext(FlashCardsContext);

  const [state, action] = context;

  const [progress, setProgress] = useState(new Animated.Value(0));
  const progressAnim = progress.interpolate({
    inputRange: [0, state.cards.length === 0 ? 1 : state.cards.length + 1],
    outputRange: ["0%", "100%"],
  });

  useEffect(() => {
    state.currentIndex === 0
      ? Animated.timing(progress, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
        }).start()
      : Animated.timing(progress, {
          toValue: state.currentIndex + 1,
          duration: 1000,
          useNativeDriver: false,
        }).start();

    console.log("INDEX CHANGED");
  }, [state.currentIndex]);
  return (
    <View
      style={{
        width: "90%",
        height: 20,
        borderRadius: 20,
        backgroundColor: "#00000020",
        marginBottom: 20,
        top: 80,
        left: 0,
        alignSelf: "center",
      }}
    >
      <Animated.View
        style={[
          {
            height: 20,
            borderRadius: 20,
            backgroundColor: "#3498db",
          },
          {
            width: progressAnim,
          },
        ]}
      ></Animated.View>
    </View>
  );
};

export default ProgressBar;

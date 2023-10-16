import {
  View,
  Text,
  StyleSheet,
  Button,
  Pressable,
  useWindowDimensions,
} from "react-native";
import React, { useEffect } from "react";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FlashCard = (props) => {
  const spin = useSharedValue<number>(0);
  const { width } = useWindowDimensions();
  const { question, answer } = props;

  const rStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [0, 180]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  const bStyle = useAnimatedStyle(() => {
    const spinVal = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [
        {
          rotateY: withTiming(`${spinVal}deg`, { duration: 500 }),
        },
      ],
    };
  }, []);

  return (
    <>
      <Pressable
        onPress={() => {
          spin.value = spin.value ? 0 : 1;
        }}
        style={{ marginTop: 30, alignItems: "center" }}
      >
        <View>
          <View>
            <Animated.View style={[styles.front, rStyle]}>
              <Text style={styles.cardText}>{question}</Text>
            </Animated.View>
            <Animated.View
              style={[
                styles.back,
                bStyle,
                { backgroundImage: require("../assets/images/cowboys.jpg") },
              ]}
            >
              <Text style={styles.cardText}>{answer}</Text>
            </Animated.View>
          </View>
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  front: {
    height: 400,
    width: 250,
    backgroundColor: "#D8D9CF",
    borderRadius: 16,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backfaceVisibility: "hidden",
  },
  back: {
    height: 400,
    width: 250,
    backgroundColor: "#57aaf7",
    borderRadius: 16,
    backfaceVisibility: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "#F0F0F0", // Light gray background color
    borderRadius: 20, // Increased border radius for a softer look
    borderWidth: 2, // Increased border width for a bolder outline
    borderColor: "#999", // Slightly darker border color
    alignItems: "center",
    justifyContent: "center", // Center content both horizontally and vertically
    elevation: 5, // Increased elevation for a more pronounced shadow
    padding: 20, // Add padding for better spacing
  },

  cardText: {
    fontSize: 24, // Increased font size for bigger text
    fontWeight: "bold",
    textAlign: "center",
    width: 250, // Increased width for better text wrapping
    color: "#333", // Slightly darker text color
    marginTop: 10, // Reduced marginTop for better positioning
  },

  nextButton: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",

    justifyContent: "space-around",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlashCard;

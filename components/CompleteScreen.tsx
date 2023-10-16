// CompletionScreen.js
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { useRouter } from "expo-router";
import BackgroundAnimation from "./PanBackgroundImage";
import useFlashCards from "../hooks/useFlashCards";
import { FlashCardsContext } from "./FlashCardsContext";
import { useNavigation } from "expo-router";

const CompletionScreen = (props) => {
  const { resetCards, backToHome } = props;
  const router = useRouter();
  const { height, width } = useWindowDimensions();
  const context = useContext(FlashCardsContext);
  const navigation = useNavigation();

  if (!context) {
    throw new Error(
      "CompletionScreen must be used within a FlashCardsProvider"
    );
  }
  const [state, dispatch] = context;

  const backToHomeScreen = () => {
    backToHome();
  };

  // Extract the state and dispatch (if you need it) from the context
  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      <Text style={styles.headerText}>Congrats!</Text>

      <View style={[styles.container, { height: height / 1.5 }]}>
        <View>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Incorrect</Text>
            <Text
              style={styles.scoreCount}
            >{`${state.incorrectArray.length} / ${state.cards.length}`}</Text>
          </View>
          <View style={styles.scoreContainer}>
            <Text style={styles.scoreText}>Correct</Text>
            <Text
              style={styles.scoreCount}
            >{`${state.correctArray.length} / ${state.cards.length}`}</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              resetCards();
            }}
          >
            <Text style={styles.buttonText}>Redo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              backToHomeScreen();
            }}
          >
            <Text style={styles.buttonText}>Back To Home</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>0 Coins</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
    paddingVertical: 40,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    alignSelf: "center",
    paddingTop: 80,
  },
  scoreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 10,
  },
  scoreText: {
    fontSize: 18,
  },
  scoreCount: {
    fontSize: 18,
    fontWeight: "bold",
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    right: 20,
    marginTop: 20,
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: "#4E9ACF", // A nice shade of blue, you can adjust this
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // This makes the button rounded
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    alignSelf: "center",
  },
  // Add styles for the button text
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CompletionScreen;

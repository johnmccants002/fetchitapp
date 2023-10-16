import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  Modal,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import FlashCard from "./FlashCard";
import { useSharedValue } from "react-native-reanimated";
import { DATA } from "../data/data";
import { useRouter } from "expo-router";
import CompletionScreen from "./CompleteScreen";
const FlashCards = () => {
  const [isFlipped, setFlipped] = useState(false);
  const params = useLocalSearchParams();

  const { id } = params;
  console.log(Number(id), "ID");
  const flashcards = DATA[Number(id)].cards;

  const { width, height } = useWindowDimensions();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  const [card, setCard] = useState(
    <FlashCard
      question={flashcards[0].question}
      answer={flashcards[0].answer}
    />
  );

  const getNextCard = () => {
    // You can implement logic here to fetch the next flashcard
    // and update the `currentCard` state.
    console.log("NEXT BUTTON TAPPED");
    setComplete(true);

    // const nextIndex = (currentCardIndex + 1) % flashcards.length;
    // setCurrentCardIndex(nextIndex);
    // setCard(
    //   <FlashCard
    //     key={nextIndex}
    //     question={flashcards[nextIndex].question}
    //     answer={flashcards[nextIndex].answer}
    //     getNextCard={getNextCard}
    //   />
    // );
  };

  return (
    <View style={[styles.container, { height: height / 2 }]}>
      {card}

      <TouchableOpacity style={styles.nextButton} onPress={getNextCard}>
        <Text style={styles.nextButtonText}>Next Card</Text>
      </TouchableOpacity>

      <Modal
        visible={complete}
        animationType="slide"
        presentationStyle="overFullScreen"
      >
        <CompletionScreen />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
    paddingTop: 40,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-around",
    elevation: 3,
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    width: 200,
    height: 200,
    zIndex: 99,
    marginTop: 100,
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
    marginTop: 20,
    justifyContent: "space-between",
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlashCards;

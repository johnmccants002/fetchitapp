import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { DATA } from "../data/data";
import useFlashCards from "../hooks/useFlashCards";
import CompletionScreen from "./CompleteScreen";
import FlashCard from "./FlashCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FlashCards = () => {
  const [isFlipped, setFlipped] = useState(false);
  const params = useLocalSearchParams();

  const { id } = params;
  console.log(Number(id), "ID");
  const flashcards = DATA[Number(id)].cards;
  const {
    cards,
    currentIndex,
    correctAnswer,
    incorrectAnswer,
    state,
    resetCards,
    dispatch,
  } = useFlashCards();

  const { width, height } = useWindowDimensions();
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [complete, setComplete] = useState(false);
  const router = useRouter();

  const backToHome = () => {
    setComplete(false);
    setTimeout(() => {
      router.back();
    }, 20);
  };

  const [card, setCard] = useState<React.ReactElement | null>(null);

  useEffect(() => {
    if (cards.length > 0) {
      setCard(
        <FlashCard question={cards[0].question} answer={cards[0].answer} />
      );
    }
  }, [cards]);

  useEffect(() => {
    if (state.currentIndex && state.currentIndex < state.cards.length) {
      setCard(
        <FlashCard
          question={cards[state.currentIndex].question}
          answer={cards[state.currentIndex].answer}
          key={cards[state.currentIndex].id}
        />
      );
    }
  }, [state.currentIndex]);

  useEffect(() => {
    if (state.isFinished) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [state.isFinished]);

  return (
    <View style={[styles.container, { height: height / 2 }]}>
      {card && card}

      <View style={[styles.buttonsContainer, { width: width * 0.8 }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "red" }]}
          onPress={incorrectAnswer}
        >
          <MaterialCommunityIcons name="close" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "green" }]}
          onPress={correctAnswer}
        >
          <MaterialCommunityIcons name="check" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        visible={complete}
        animationType="fade"
        presentationStyle="fullScreen"
      >
        <CompletionScreen resetCards={resetCards} backToHome={backToHome} />
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
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FlashCards;

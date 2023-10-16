// hooks/useFlashCards.ts

import { useContext, useEffect } from "react";
import axios from "axios";
import { FlashCardsContext } from "../components/FlashCardsContext";
import { DATA } from "../data/data";
import { useLocalSearchParams } from "expo-router";

const useFlashCards = () => {
  const context = useContext(FlashCardsContext);

  if (!context) {
    throw new Error("useFlashCards must be used within a FlashCardsProvider");
  }

  const { id } = useLocalSearchParams();

  const [state, dispatch] = context;

  //   useEffect(() => {
  //     axios
  //       .get("/api/flashcards")
  //       .then((response) => {
  //         dispatch({ type: "SET_CARDS", payload: response.data });
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching flashcards:", error);
  //       });
  //   }, [dispatch]);

  useEffect(() => {
    dispatch({ type: "SET_CARDS", payload: DATA[Number(id)].cards });
  }, []);

  const incorrectAnswer = () => {
    dispatch({ type: "ANSWER_INCORRECT" });
  };

  const correctAnswer = () => {
    dispatch({ type: "ANSWER_CORRECT" });
  };

  const resetCards = () => {
    dispatch({ type: "SET_CARDS", payload: DATA[Number(id)].cards });
  };

  return {
    cards: state.cards,
    correctArray: state.correctArray,
    incorrectArray: state.incorrectArray,
    currentIndex: state.currentIndex,
    isFinished: state.isFinished,
    dispatch,
    incorrectAnswer,
    correctAnswer,
    state: state,
    resetCards,
  };
};

export default useFlashCards;

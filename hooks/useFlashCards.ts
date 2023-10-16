// hooks/useFlashCards.ts

import { useContext, useEffect } from "react";
import axios from "axios";
import { FlashCardsContext } from "../components/FlashCardsContext";

const useFlashCards = () => {
  const context = useContext(FlashCardsContext);

  if (!context) {
    throw new Error("useFlashCards must be used within a FlashCardsProvider");
  }

  const [state, dispatch] = context;

  useEffect(() => {
    axios
      .get("/api/flashcards")
      .then((response) => {
        dispatch({ type: "SET_CARDS", payload: response.data });
      })
      .catch((error) => {
        console.error("Error fetching flashcards:", error);
      });
  }, [dispatch]);

  return {
    cards: state.cards,
    correctCount: state.correctCount,
    currentIndex: state.currentIndex,
    isFinished: state.isFinished,
    dispatch,
  };
};

export default useFlashCards;

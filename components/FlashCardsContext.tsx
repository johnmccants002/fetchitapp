// FlashCardsContext.tsx

import React from "react";

type FlashCard = {
  question: string;
  answer: string;
};

export type State = {
  cards: FlashCard[];
  correctCount: number;
  currentIndex: number;
  isFinished: boolean;
};

const initialState: State = {
  cards: [],
  correctCount: 0,
  currentIndex: 0,
  isFinished: false,
};

type Action =
  | { type: "SET_CARDS"; payload: FlashCard[] }
  | { type: "ANSWER_CORRECT" }
  | { type: "ANSWER_INCORRECT" }
  | { type: "RESET" };

const FlashCardsContext = React.createContext<
  [State, React.Dispatch<Action>] | undefined
>(undefined);

export { FlashCardsContext, initialState };

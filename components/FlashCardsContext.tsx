// FlashCardsContext.tsx

import React from "react";

type FlashCard = {
  question: string;
  answer: string;
  id: number;
};

export type State = {
  cards: FlashCard[];
  correctArray: Array<string | number>;
  incorrectArray: Array<string | number>;
  currentIndex: number;
  isFinished: boolean;
};

const initialState: State = {
  cards: [],
  correctArray: [],
  incorrectArray: [],
  currentIndex: 0,
  isFinished: false,
};

export type Action =
  | { type: "SET_CARDS"; payload: FlashCard[] }
  | { type: "ANSWER_CORRECT" }
  | { type: "ANSWER_INCORRECT" }
  | { type: "RESET" };

const FlashCardsContext = React.createContext<
  [State, React.Dispatch<Action>] | undefined
>(undefined);

export { FlashCardsContext, initialState };

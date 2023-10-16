// FlashCardsReducer.tsx

import { State, Action, initialState } from "./FlashCardsContext";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CARDS":
      return { ...initialState, cards: action.payload };
    case "ANSWER_CORRECT":
      const nextIndexCorrect = state.currentIndex + 1;
      return {
        ...state,
        correctCount: state.correctCount + 1,
        currentIndex: nextIndexCorrect,
        isFinished: nextIndexCorrect === state.cards.length,
      };
    case "ANSWER_INCORRECT":
      const nextIndexIncorrect = state.currentIndex + 1;
      return {
        ...state,
        currentIndex: nextIndexIncorrect,
        isFinished: nextIndexIncorrect === state.cards.length,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default reducer;

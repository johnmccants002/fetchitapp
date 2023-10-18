// FlashCardsReducer.tsx

import { State, Action, initialState } from "./FlashCardsContext";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CARDS":
      return { ...initialState, cards: action.payload };
    case "ANSWER_CORRECT":
      const nextIndexCorrect = state.currentIndex + 1;
      const correctCardId = state.cards[state.currentIndex].id;

      return {
        ...state,
        correctArray: [...state.correctArray, correctCardId],

        currentIndex: nextIndexCorrect,
        isFinished: nextIndexCorrect === state.cards.length,
      };
    case "ANSWER_INCORRECT":
      const nextIndexIncorrect = state.currentIndex + 1;
      const incorrectCardId = state.cards[state.currentIndex].id;

      return {
        ...state,
        currentIndex: nextIndexIncorrect,
        incorrectArray: [...state.incorrectArray, incorrectCardId],
        isFinished: nextIndexIncorrect === state.cards.length,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

export default reducer;

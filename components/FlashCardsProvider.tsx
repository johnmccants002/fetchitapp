// FlashCardsProvider.tsx

import React, { useReducer } from "react";
import { FlashCardsContext, initialState } from "./FlashCardsContext";
import reducer from "./FlashCardsReducer";

type Props = {
  children: React.ReactNode;
};

const FlashCardsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FlashCardsContext.Provider value={[state, dispatch]}>
      {children}
    </FlashCardsContext.Provider>
  );
};

export default FlashCardsProvider;

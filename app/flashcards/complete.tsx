import React from "react";
import CompletionScreen from "../../components/CompleteScreen";
import { Stack } from "expo-router";

const Page = () => {
  return (
    <>
      <Stack.Screen options={{ title: "Congrats!" }} />

      <CompletionScreen />
    </>
  );
};

export default Page;

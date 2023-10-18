import React from "react";
import MainScreen from "../../components/MainScreen";
import { Stack } from "expo-router";

const Page = () => {
  return (
    <>
      <Stack.Screen
        options={{
          title: "FlashCards",
          headerStyle: { backgroundColor: "#57aaf7" },
        }}
      />
      <MainScreen />
    </>
  );
};

export default Page;

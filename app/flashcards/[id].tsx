import { Stack, useLocalSearchParams } from "expo-router";
import FlashCards from "../../components/FlashCards";
import { DATA } from "../../data/data";
import FlashCardsProvider from "../../components/FlashCardsProvider";
const Page = () => {
  const params = useLocalSearchParams();

  console.log(params, "PARAMS");
  return (
    <>
      <Stack.Screen options={{ title: DATA[Number(params.id)].title }} />

      <FlashCardsProvider>
        <FlashCards />
      </FlashCardsProvider>
    </>
  );
};

export default Page;

import { Stack, useLocalSearchParams } from "expo-router";
import FlashCards from "../../components/FlashCards";
import { DATA } from "../../data/data";
const Page = () => {
  const params = useLocalSearchParams();

  console.log(params, "PARAMS");
  return (
    <>
      <Stack.Screen options={{ title: DATA[Number(params.id)].title }} />
      <FlashCards />
    </>
  );
};

export default Page;

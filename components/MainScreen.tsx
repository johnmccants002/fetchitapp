import { useRouter } from "expo-router";
import React from "react";
import { FlatList, View, Text, useWindowDimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { DATA } from "../data/data";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const chemistryFlashcards = [
  {
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    id: 1,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answer: "Oxygen",
    id: 2,
  },
  {
    question: "What is the atomic number of carbon?",
    answer: "6",
    id: 3,
  },
  {
    question: "What is the chemical formula for methane?",
    answer: "CH4",
    id: 4,
  },
  {
    question: "What is the most abundant gas in Earth’s atmosphere?",
    answer: "Nitrogen",
    id: 5,
  },
  // Add more chemistry flashcards as needed
];

const psych301Flashcards = [
  {
    question: "What is the definition of psychology?",
    answer: "The scientific study of behavior and mental processes.",
    id: 1,
  },
  {
    question: "Who is often considered the founder of modern psychology?",
    answer: "Wilhelm Wundt",
    id: 2,
  },
  {
    question:
      "What is the difference between classical conditioning and operant conditioning?",
    answer:
      "Classical conditioning is learning through association, while operant conditioning is learning through consequences.",
    id: 3,
  },
  {
    question:
      "What is the main idea behind Abraham Maslow's hierarchy of needs?",
    answer:
      "People have a series of needs, and fulfilling these needs leads to self-actualization and personal growth.",
    id: 4,
  },
  {
    question: "Who is known for the social-cognitive theory of personality?",
    answer: "Albert Bandura",
    id: 5,
  },
  // Add more Psych 301 flashcards as needed
];

const MainScreen = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();

  const Item = (props) => {
    const { title, id } = props;
    return (
      <TouchableOpacity onPress={() => router.push(`/flashcards/${id}`)}>
        <View
          style={{
            height: 80,
            width: width,
            justifyContent: "space-between",
            padding: 20,
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 22 }}>{title}</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={25}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} id={item.id} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MainScreen;

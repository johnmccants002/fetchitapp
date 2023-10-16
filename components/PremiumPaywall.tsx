import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import BackgroundAnimation from "./PanBackgroundImage";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Paywall = ({ onClose, onContinue }) => {
  return (
    <View style={styles.container}>
      <BackgroundAnimation />
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose}>
          <View
            style={{
              backgroundColor: "white",
              height: 50,
              width: 50,
              borderRadius: 25,
              alignItems: "center",
              justifyContent: "center",
              opacity: 0.5,
            }}
          >
            <MaterialCommunityIcons size={25} name="close" />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>Unlock Premium</Text>

        <View style={styles.features}>
          <Text>• An original Daily Flashcard every day</Text>
          <Text>• Exclusive access to premium decks</Text>
          <Text>• Ad-free browsing experience</Text>
          <Text>• Additional themes and customization</Text>
          <Text>• Priority support</Text>
        </View>

        <View style={styles.pricing}>
          <Text>$2 a month</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
            <Text style={styles.buttonText}>Upgrade</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",

    // for Android
  },
  mainContainer: {
    justifyContent: "center",
    height: "100%",
    paddingBottom: 40,
    paddingTop: 40,
    alignItems: "center",
  },
  header: {
    position: "absolute",
    left: 10,
    top: 10,
    width: 30,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  features: {
    marginTop: 20,
    paddingLeft: 10,
    backgroundColor: "white",
    paddingTop: 20,
  },
  pricing: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    paddingTop: 20,
    alignItems: "center",
  },
  card: {
    zIndex: 3,
    overflow: "hidden",
    marginTop: -10,
    alignItems: "center",
    justifyContent: "center",
    // paddingHorizontal: 20,
    height: 360,
    width: 300,
    borderRadius: 20,
    backgroundColor: "white",
    paddingTop: 40,
    paddingHorizontal: 4,
  },
  buttonContainer: {
    backgroundColor: "#4E9ACF", // A nice shade of blue, you can adjust this
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // This makes the button rounded
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    marginBottom: 40,
    zIndex: 99,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Paywall;

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  Modal,
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Paywall from "./PremiumPaywall";

const Main = () => {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const [showPremium, setShowPremium] = useState(false);

  const onClose = () => {
    setShowPremium(false);
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
      }}
    >
      <TouchableOpacity onPress={() => router.push(`/flashcards`)}>
        <View
          style={{
            height: 80,
            width: width,
            justifyContent: "space-between",
            padding: 20,
            flexDirection: "row",
            borderBottomColor: "lightgrey",
            borderBottomWidth: 1,
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
          }}
        >
          <Text style={{ fontSize: 22 }}>FlashCards</Text>
          <MaterialCommunityIcons
            name="arrow-right"
            size={25}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </TouchableOpacity>
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              height: 70,
              width: width,
              padding: 20,
              flexDirection: "row",
              alignSelf: "center",

              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 20 }}>Coming Soon!</Text>
          </View>
          <View
            style={{
              height: 80,
              width: width,
              justifyContent: "space-between",
              padding: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 22, color: "grey" }}>Timed Quiz</Text>
            <MaterialCommunityIcons
              name="lock"
              size={25}
              style={{ height: 25, width: 25 }}
              color={"grey"}
            />
          </View>
          <View
            style={{
              height: 80,
              width: width,
              justifyContent: "space-between",
              padding: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 22, color: "grey" }}>Multiple Choice</Text>
            <MaterialCommunityIcons
              name="lock"
              size={25}
              style={{ height: 25, width: 25 }}
              color={"grey"}
            />
          </View>
          <View
            style={{
              height: 80,
              width: width,
              justifyContent: "space-between",
              padding: 20,
              flexDirection: "row",
            }}
          >
            <Text style={{ fontSize: 22, color: "grey" }}>
              Checklist / Reminders
            </Text>
            <MaterialCommunityIcons
              name="lock"
              size={25}
              style={{ height: 25, width: 25 }}
              color={"grey"}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              setShowPremium(true);
            }}
          >
            <Text style={styles.buttonText}>Unlock Premium</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        animationType="slide"
        // transparent={true}
        visible={showPremium}
        // onRequestClose={() => setShowCreateOrg(false)}
      >
        <Pressable
          style={styles.modalBackground}
          onPress={() => setShowPremium(false)}
        ></Pressable>

        <View
          style={{
            flex: 1,
            zIndex: 3,
            overflow: "hidden",
            marginTop: -10,
            alignItems: "center",
            justifyContent: "center",
            // paddingHorizontal: 20,
            position: "absolute",
            top: 80,
            left: 20,
            right: 20,
            bottom: 100,
            borderRadius: 20,
            backgroundColor: "white",
            paddingVertical: 8,
            paddingHorizontal: 4,
          }}
        >
          <Paywall onClose={onClose} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#4E9ACF", // A nice shade of blue, you can adjust this
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25, // This makes the button rounded
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
    alignSelf: "center",
    marginBottom: 40,
    zIndex: 99,
  },
  // Add styles for the button text
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  modalBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,

    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
});

export default Main;

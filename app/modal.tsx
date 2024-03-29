import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  StyleSheet,
} from "react-native";
import backgroundImage from "../assets/images/doglogo.png";
import BackgroundAnimation from "../components/PanBackgroundImage";
import { useNavigation } from "expo-router";

// Import your company's logo image here

const ContactSupportScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const handleSubmit = () => {
    if (!name || !email || !message) {
      Alert.alert("Error", "Please fill in all fields");

      return;
    }

    // Send the support request using an API or other suitable method

    // Clear form fields after submission
    setName("");
    setEmail("");
    setMessage("");

    Alert.alert("Success", "Your support request has been submitted!", [
      {
        text: "Ok",
        onPress: () => navigation.dispatch({ type: "POP_TO_TOP" }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* Company Logo */}
      {/* <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      /> */}

      {/* Welcome Message */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Feedback</Text>
        <Text style={styles.title}>
          Welcome to our app! We value your feedback. Please feel free to share
          any issues or suggestions you may have.
        </Text>
      </View>

      {/* Contact Form */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          placeholderTextColor={"gray"}
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Your Email"
          placeholderTextColor={"gray"}
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Your Message"
          placeholderTextColor={"gray"}
          value={message}
          onChangeText={(text) => setMessage(text)}
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 80,
    paddingBottom: 150,
  },
  inputContainer: {
    width: "100%",
  },
  logo: {
    width: 150, // Adjust the width and height to fit your logo's dimensions
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    textAlign: "left",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    width: "100%",
  },
  messageInput: {
    minHeight: 120,
  },
  button: {
    backgroundColor: "blue",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 20,
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 30,
    height: 120,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "left",
  },
});

export default ContactSupportScreen;

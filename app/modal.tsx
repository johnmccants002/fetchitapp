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

// Import your company's logo image here

const ContactSupportScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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

    Alert.alert("Success", "Your support request has been submitted!");
  };

  return (
    <View style={styles.container}>
      {/* Company Logo */}
      {/* <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      /> */}

      {/* Welcome Message */}
      <Text style={styles.title}>
        Welcome to our app! We value your feedback. Please feel free to share
        any issues or suggestions you may have.
      </Text>

      {/* Contact Form */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        value={message}
        onChangeText={(text) => setMessage(text)}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 150, // Adjust the width and height to fit your logo's dimensions
    height: 150,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    textAlign: "center",
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
});

export default ContactSupportScreen;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Profile = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://imgur.com/hCwHtRc.png" }} // Replace with your image URL
            style={styles.profileImage}
          />
          <Text style={styles.username}>@John</Text>
        </View>
        <View style={styles.aboutSection}>
          <Text style={styles.aboutTitle}>About Me</Text>
          <Text style={styles.aboutText}>
            I'm a dedicated student at Sacramento State, pursuing a degree in
            Computer Science. My passion for technology drives me to explore the
            ever-evolving world of software development and problem-solving.
            When I'm not buried in lines of code, you can find me exploring the
            beautiful campus, attending inspiring lectures, and collaborating
            with fellow Hornets on exciting projects. I have a deep love for
            learning and am always up for a challenge. Whether it's tackling
            complex algorithms, building web applications, or delving into the
            latest tech trends, I'm constantly seeking opportunities to expand
            my knowledge and skills. Outside of academics, I enjoy spending time
            in the vibrant city of Sacramento. From visiting local art galleries
            to savoring the diverse culinary scene, there's always something new
            to discover. I'm also a proud member of several student
            organizations, fostering connections and contributing to the
            university community. Feel free to connect with me, and let's embark
            on this educational journey together!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  aboutSection: {
    marginTop: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  aboutText: {
    fontSize: 16,
    marginTop: 10,
    lineHeight: 24,
  },
});

export default Profile;

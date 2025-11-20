import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "./components/bottom_nav.jsx"

export default function MyComponent() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}>Hello, world this is for the fucking profile!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // fills the screen
    justifyContent: "center", // center vertically
    alignItems: "center",     // center horizontally
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#111",
  },
});
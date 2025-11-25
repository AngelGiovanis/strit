import React from "react";
import { Button,View, Text, StyleSheet } from "react-native";
import Header from "./components/bottom_nav.jsx"
import { router } from "expo-router";




export default function MyComponent() {
  return (
    <View style={styles.container}>
      <Header/>
      <Text style={styles.text}>Hello, world my parties thiingy!</Text>
      <Button
      title="add party"
        onPress={()=>{router.push("/add_party")}}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    justifyContent: "center", 
    alignItems: "center",     
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    color: "#111",
  },
});
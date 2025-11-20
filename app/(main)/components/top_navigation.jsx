import React from "react";
import { View, Text, Pressable,Image,StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function Top_nav({ title }) {
  const router = useRouter();

  return (
    <View style={styles.circle_profile}>
      
      <View style={styles.popup_nav}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
line: {
    backgroundColor: "#fff",
    width: 35,   
    height: 4,   
    marginVertical: 2, 
    borderRadius: 5
  },
  popup_nav: {
    position: "absolute",
    top: 65,    
    left: 20,   
    zIndex: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },
  circle_profile:{
    top: 55,
    right: 20,
    position: "absolute",
    backgroundColor: "#fff",
    borderRadius: 9999,
    width: 50,
    height: 50,
    zIndex: 10,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 5,
  },

});
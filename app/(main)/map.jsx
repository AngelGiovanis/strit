import React from "react";
import { Text,Image,Pressable, View , StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import LottieView from "lottie-react-native";
import map_style from "../../assets/map_styles/gta_map.js";
import { useRouter } from "expo-router";
import Header from "./components/bottom_nav.jsx"
import Top_nav from "./components/top_navigation.jsx"




export default function MapScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        customMapStyle={map_style}
        initialRegion={{
          latitude: 37.9838, 
          longitude: 23.7275,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >

      </MapView>

      <View style={styles.circle_profile}></View>
      
      <Pressable style={styles.add_party}>

      </Pressable>

      <Header/>
      <Top_nav/>
      
      <View style={styles.popup_nav}>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
        <View style={styles.line}></View>
      </View>
    </View>
    

  );
}

const styles = StyleSheet.create({

  add_party: {
  position: "absolute",
  bottom: 90,              
  alignSelf: "center",     

  width: 72,
  height: 72,
  borderRadius: 9999,
  backgroundColor: "#fff",

  justifyContent: "center",
  alignItems: "center",

  
  shadowColor: "#000",
  shadowOpacity: 0.18,
  shadowOffset: { width: 0, height: 6 },
  shadowRadius: 10,
  elevation: 12,
}
});
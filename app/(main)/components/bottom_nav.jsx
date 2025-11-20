import React from "react";
import { View, Text, Pressable,Image,StyleSheet} from "react-native";
import { useRouter } from "expo-router";

export default function Header({ title }) {
  const router = useRouter();

  return (
<View style={styles.navigation_bottom}>
        <Pressable onPress={()=> router.replace("/explore")}>
          <Image
          style={styles.nav_icon}
          source={require("../../../assets/images/loupe.png")}
          />
        </Pressable>

        <Pressable onPress={()=> router.replace("/map")}>
          <Image
          style={styles.nav_icon}
          source={require("../../../assets/images/map.png")}
          />
        </Pressable>

        <Pressable onPress={()=> router.replace("/my_parties")}>
          <Image
          style={styles.nav_icon}
          source={require("../../../assets/images/party.png")}
          />
        </Pressable>

      </View>
      
  );
}

const styles = StyleSheet.create({
    navigation_bottom:{
    position: "absolute",
    zIndex: 10,
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 8,
    elevation: 10,
  },
  nav_icon:{
    width: 35,
    height: 35,
  },
});
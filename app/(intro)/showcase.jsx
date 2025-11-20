import React,{useState} from "react";
import {Image,View , StyleSheet , Text , TextInput , ScrollView, Dimensions,Button,ImageBackground,Pressable} from "react-native"
import { router } from "expo-router";
import colors from "../../assets/pallete/colors";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";


const { width, height } = Dimensions.get("window");
const platos = width;
const ipsos = height;

export default function App(){
  const router = useRouter();
  return(
      <ScrollView 
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={styles.container}>

        <View style={[styles.screen_size,styles.screen_1]}>
          <Image
          source={require("../../assets/images/strit_logo_inner_shadow.png")}
          />
          <View style={[styles.circle,{top: -40, left: -40, backgroundColor: "rgba(255,255,255,0.08)"}]}></View>
          <View style={[styles.circle,{top: 170, right: -110, backgroundColor: "rgba(255,255,255,0.08)"}]}></View>
          <View style={[styles.circle,{top: 380, left: -110, backgroundColor: "rgba(255,255,255,0.08)"}]}></View>
          <View style={[styles.circle,{bottom: -40, right: -110, backgroundColor: "rgba(255,255,255,0.08)"}]}></View>
          
          <Text style={{color:colors.light,fontSize:26,fontWeight:"bold",fontFamily:"BebasNeue"}}>THIS IS A PLACEHOLDER TEXT</Text>
          <Button
          title="Go to Map"
          onPress={()=> router.push("/map")}>
          </Button>
          <Text style={{color: colors.light,fontSize:16,fontWeight:"bold"}}>Swipe To Continue</Text>
        </View>

        <ImageBackground
          source={require("../../assets/images/Texturelabs_Atmosphere_180S.jpg")}
          style={[styles.screen_size]}
        >
           <Text style={styles.text_style}>We Are</Text>
           
           <Text style={{color: colors.light,fontSize:16,fontWeight:"bold"}}>Swipe To Continue</Text>
        </ImageBackground>

        <View style={[styles.screen_size,styles.screen_1]}>
          <Text style={styles.text_style}>Testing</Text>

          <Pressable onPress={() => router.replace("/register")}>
            <Text>Register</Text>
          </Pressable>
          
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  screen_1:{
    backgroundColor: "#FF6A00",
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 150,
  },
  screen_size:{
    height: ipsos,
    width: platos,
    justifyContent: "center",
    alignItems: "center",
  },
  text_style:{
    color: "#ffffff",
    fontSize: 40,
    marginBottom: 10,
  },
  circle:{
    width: 230,
    height: 230,
    position: "absolute",
    borderRadius:9999,
  }
});


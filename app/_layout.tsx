import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

// keep the splash screen visible until fonts load
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // load fonts once, globally
  const [fontsLoaded] = useFonts({
    BebasNeue: require("../assets/fonts/BebasNeue/BebasNeue-Regular.ttf"),
    DelaGothicOne: require("../assets/fonts/Dela_Gothic_One/DelaGothicOne-Regular.ttf"),
  });

  // hide splash screen when fonts are ready
  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  // don’t render anything until fonts are loaded
  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
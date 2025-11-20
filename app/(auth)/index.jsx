import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { supabase } from "../../lib/supabase.js";
import { router } from "expo-router";

export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.log("Error checking session:", error);
        setLoading(false);
        return;
      }

      const session = data.session;
      if (session) {
        router.replace("/map"); 
      } else {
        router.replace("/showcase");
      }
    };

    checkSession();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return null;
}
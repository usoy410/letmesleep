import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import './globals.css'
export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#0c0f26",
            borderTopColor: "#1a1a2e",
            paddingTop: 10,
            paddingBottom: 10,
          },
          tabBarActiveTintColor: "#ffffff",
          tabBarInactiveTintColor: "#888888",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Sleep Hub",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" color={color} size={30} />
            ),
          }}
        />
        <Tabs.Screen
          name="meditation"
          options={{
            title: "Sleep Habits",
            tabBarIcon: ({ color }) => (
              <Ionicons name="moon" color={color} size={30} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

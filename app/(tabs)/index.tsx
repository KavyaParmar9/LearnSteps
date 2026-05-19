import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
        }}
      >
        LearnSteps
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 10,
        }}
      >
        Your DSA learning companion
      </Text>
    </View>
  );
}
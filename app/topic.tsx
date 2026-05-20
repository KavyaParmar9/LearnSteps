import { View, Text } from "react-native";

export default function TopicScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        padding: 20,
        paddingTop: 60,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Arrays
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 10,
          fontSize: 16,
        }}
      >
        Problems related to arrays will appear here.
      </Text>
    </View>
  );
}

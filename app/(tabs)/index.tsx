import { ScrollView, Text, View } from "react-native";
import TopicCard from "../../components/TopicCard";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
      }}
    >
      <View
        style={{
          padding: 20,
          marginTop: 50,
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
            marginTop: 8,
            fontSize: 16,
          }}
        >
          Master DSA step by step
        </Text>
        <TopicCard
  title="Arrays"
  onPress={() => router.push("/topic")}
/>

<TopicCard
  title="Graphs"
  onPress={() => router.push("/topic")}
/>

<TopicCard
  title="Dynamic Programming"
  onPress={() => router.push("/topic")}
/>
      </View>
    </ScrollView>
  );
}

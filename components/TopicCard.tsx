import { Text, TouchableOpacity } from "react-native";

type TopicCardProps = {
  title: string;
  onPress: () => void;
};

export default function TopicCard({
  title,
  onPress,
}: TopicCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#1e293b",
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}import { Text, View } from "react-native";

type TopicCardProps = {
  title: string;
  solved: number;
  total: number;
};

export default function TopicCard({
  title,
  solved,
  total,
}: TopicCardProps) {
  return (
    <View
      style={{
        backgroundColor: "#1e293b",
        padding: 20,
        borderRadius: 16,
        marginBottom: 15,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          color: "#94a3b8",
          marginTop: 8,
        }}
      >
        
      </Text>
    </View>
  );
}

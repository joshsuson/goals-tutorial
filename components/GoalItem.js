import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ itemData, onGoalDelete }) {
  return (
    <Pressable
      android_ripple={{ color: "#ddd" }}
      onPress={() => onGoalDelete(itemData.item.key)}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
  },
});

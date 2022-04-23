import { useState } from "react";
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalOpen(true);
  }

  function endAddGoalHandler() {
    setIsModalOpen(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          onPress={startAddGoalHandler}
          title="Add New Goal"
          color="#a065ec"
        />
        <GoalInput
          onAddGoal={addGoalHandler}
          visible={isModalOpen}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  itemData={itemData}
                  onGoalDelete={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  goalsContainer: {
    flex: 5,
  },
});

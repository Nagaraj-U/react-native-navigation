import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const EditSettings = (props) => {
  return (
    <View style={styles.container}>
      <Text>Edit Settings Screen</Text>
      <Button
        onPress={() => props.navigation.navigate("Settings")}
        title="Back to settings"
      />
    </View>
  );
};

export default EditSettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

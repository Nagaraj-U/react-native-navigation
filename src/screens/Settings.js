import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

const Settings = (props) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button
        onPress={() => props.navigation.navigate("EditSettings")}
        title="Edit settings"
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
